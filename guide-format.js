// Reading and writing the act file format (see acts/README.md).
// Shared by index.html (the guide) and editor.html (the step editor).
const GuideFormat = (() => {
  const ACTIONS = ["kill", "item", "quest", "trial", "portal", "go", "town", "do"];
  const OPTIONAL_TEXT = ["town", "portal", "trial"];
  const TOWN_KINDS = ["get", "buy", "talk", "craft"];
  const TOWN_VIA = { logout: "logout", portal: "portal", wp: "waypoint", waypoint: "waypoint" };
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const TASK_RE = new RegExp(`^(.+?)\\s+(${TOWN_KINDS.join("|")})\\s+(.+)$`, "i");
  const OPTION_RE = /^option\s+(\S+)\s+(.*?)\s*\[([^\]]+)\]$/i;
  const LINE_COND_RE = /\s*\[if\s+([^\]]+)\]$/i;

  // --- Route options and conditions ----------------------------------------
  // An option has choices; the first is the default. A condition is one of:
  //   den          option "den" is "yes"
  //   !den         option "den" is "no"
  //   bandits=oak|alira    option is one of these choices
  //   bandits!=all         option is none of these choices
  function parseCond(cond) {
    const c = cond.replace(/\s+/g, "");
    let m;
    if ((m = c.match(/^([\w-]+)(!?=)([\w|-]+)$/))) return { id: m[1], not: m[2] === "!=", values: m[3].split("|") };
    if ((m = c.match(/^(!?)([\w-]+)$/))) return { id: m[2], not: false, values: [m[1] ? "no" : "yes"] };
    return null;
  }

  // values: { optionId: choice }. Missing values fall back to the option's default.
  function matches(cond, values, options) {
    if (!cond) return true;
    const c = parseCond(cond);
    if (!c) return true;
    const opt = options.find(o => o.id === c.id);
    const value = (values && values[c.id]) || (opt ? opt.choices[0] : undefined);
    return c.values.includes(value) !== c.not;
  }

  function checkCond(cond, options) {
    const c = parseCond(cond);
    if (!c) return `can't read condition '${cond}' (use den, !den, name=choice or name!=choice)`;
    const opt = options.find(o => o.id === c.id);
    if (!opt) return `unknown option '${c.id}' in condition '${cond}'`;
    const bad = c.values.filter(v => !opt.choices.includes(v));
    if (bad.length) return `option '${c.id}' has no choice '${bad.join("|")}' (choices: ${opt.choices.join(", ")})`;
    return null;
  }

  // --- Reading -------------------------------------------------------------

  // sources: [{ name, text }]. Returns { steps, options, errors }.
  // Each step keeps its raw `lines` in file order (used by the editor) and its `note`,
  // plus derived fields for the guide: id, title, actions, tasks.
  // Steps and lines can carry a `cond` (see above).
  function parse(sources) {
    const steps = [], options = [], errors = [];
    const condChecks = []; // checked after all options are known
    for (const { name, text } of sources) {
      let act = null, step = null, visits = 0, seen = {};
      text.split(/\r?\n/).forEach((raw, n) => {
        const err = msg => errors.push({ file: name, line: n + 1, msg, text: raw.trim() });
        const line = raw.replace(/\s+$/, "");
        let trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) return;
        let m;

        if ((m = trimmed.match(/^==\s*Act\s+(\d+)$/i))) {
          act = +m[1]; step = null; visits = 0; seen = {};
          return;
        }

        if (!/^\s/.test(line) && /^option\s/i.test(trimmed)) {
          if (act == null) return err("option before the first '== Act N' line");
          if (!(m = trimmed.match(OPTION_RE))) return err("options are 'option <name> <question> [choice|choice]'");
          const choices = m[3].split("|").map(c => c.trim()).filter(Boolean);
          if (choices.length < 2) return err("an option needs at least two choices, e.g. [yes|no]");
          if (options.some(o => o.id === m[1])) return err(`option '${m[1]}' is defined twice`);
          options.push({ act, id: m[1], question: m[2], choices });
          step = null;
          return;
        }

        // Unindented line: a new step (zone or town visit) with optional [flags].
        if (!/^\s/.test(line)) {
          if (act == null) return err("step before the first '== Act N' line");
          const flags = [];
          const zone = trimmed.replace(/\[([^\]]*)\]/g, (_, f) => { flags.push(f.trim()); return ""; }).trim();
          step = { act, zone, isTown: /^town$/i.test(zone), wp: false, level: "", cond: "", lines: [], note: "" };
          for (const f of flags) {
            if (/^simple$/i.test(f)) continue; // flag of the removed Simple mode, ignored
            else if (/^wp$/i.test(f) && !step.isTown) step.wp = true;
            else if ((m = f.match(/^lvl\s+(.+)$/i))) step.level = m[1];
            else if ((m = f.match(/^if\s+(.+)$/i))) { step.cond = m[1].trim(); condChecks.push([step.cond, err]); }
            else err(`unknown flag [${f}] (use [wp], [lvl X] or [if option])`);
          }
          if (step.isTown) {
            visits++;
            step.title = `Town visit ${visits}`;
            step.id = `a${act}.town.${visits}`;
          } else {
            const key = slug(zone);
            seen[key] = (seen[key] || 0) + 1;
            step.title = zone;
            step.id = `a${act}.${key}.${seen[key]}`;
          }
          steps.push(step);
          return;
        }

        // Indented line: something to do within the current step, maybe ending in [if ...].
        if (!step) return err("indented line without a step above it");
        let cond = "";
        trimmed = trimmed.replace(LINE_COND_RE, (_, c) => { cond = c.trim(); return ""; });
        if (cond) condChecks.push([cond, err]);
        m = trimmed.match(/^(\S+)(?:\s+(.*))?$/);
        const kw = m[1].toLowerCase(), rest = (m[2] || "").trim();
        const push = l => step.lines.push(cond ? { ...l, cond } : l);
        // A step has one note; several note lines are joined.
        if (kw === "note") {
          if (cond) return err("notes can't have a condition");
          if (rest) step.note = step.note ? step.note + " " + rest : rest;
          return;
        }

        if (step.isTown) {
          if (kw === "exit" || kw === "go") {
            if (!rest) return err(kw === "exit" ? "'exit' needs a text, e.g. portal" : "'go' needs a zone");
            return push({ type: kw, text: rest });
          }
          const tm = trimmed.match(TASK_RE);
          if (!tm) return err(`town lines are '<NPC> ${TOWN_KINDS.join("|")} <text>', 'exit <how>', 'go <zone>' or 'note <text>'`);
          return push({ type: "task", npc: tm[1].trim(), kind: tm[2].toLowerCase(), text: tm[3].trim() });
        }

        // Older files had the waypoint as a line; it's a step flag now.
        if (kw === "wp") { step.wp = true; return; }
        if (!ACTIONS.includes(kw)) return err(`unknown keyword '${m[1]}' (use ${ACTIONS.join(", ")}, note)`);
        if (kw === "town" && !TOWN_VIA[rest.toLowerCase()]) return err("'town' needs logout, portal or wp");
        if (!OPTIONAL_TEXT.includes(kw) && !rest) return err(`'${kw}' needs a text`);
        push({ type: kw, text: rest });
      });
    }
    for (const [cond, err] of condChecks) {
      const msg = checkCond(cond, options);
      if (msg) err(msg);
    }
    steps.forEach(derive);
    return { steps, options, errors };
  }

  function derive(s) {
    // Town visits: exit/go lines are shown like zone actions; tasks get checkboxes.
    s.actions = s.lines.filter(l => l.type !== "task");
    const count = {};
    s.tasks = s.lines.filter(l => l.type === "task").map(l => {
      const k = slug(l.npc);
      count[k] = (count[k] || 0) + 1;
      return { id: `${s.id}.${k}.${count[k]}`, npc: l.npc, kind: l.kind, text: l.text, cond: l.cond || "" };
    });
  }

  // Display text for a zone action or a town exit line.
  function describe(a) {
    if (a.type === "town" || a.type === "exit") return "via " + (TOWN_VIA[a.text.toLowerCase()] || a.text);
    if (a.type === "portal") return a.text ? "Place portal " + a.text : "Place portal";
    if (a.type === "trial") return a.text || "Complete the Trial of Ascendancy";
    return a.text;
  }

  // --- Writing -------------------------------------------------------------

  // Keep text from breaking the format or the String.raw wrapper.
  const clean = s => String(s || "").replace(/[\r\n]+/g, " ").replace(/`/g, "'").replace(/\$\{/g, "$ {").trim();
  const cleanName = s => clean(s).replace(/[[\]]/g, "").replace(/^[#=\s]+/, "").trim();
  const cleanCond = s => clean(s).replace(/[[\]]/g, "");

  // steps: [{ act, isTown, zone, wp, level, cond, lines, note }],
  // options: [{ act, id, question, choices }] -> act file text.
  function serialize(steps, options = []) {
    const out = [];
    const acts = [...new Set([...options.map(o => o.act), ...steps.map(s => s.act)])];
    for (const act of acts) {
      out.push("", `== Act ${act}`);
      const opts = options.filter(o => o.act === act);
      if (opts.length) out.push("");
      for (const o of opts) {
        const choices = o.choices.map(c => clean(c).replace(/[[\]|\s]/g, "")).filter(Boolean);
        out.push(`option ${clean(o.id).replace(/\s+/g, "-") || "unnamed"}  ${clean(o.question).replace(/[[\]]/g, "")}  [${choices.join("|")}]`);
      }
      for (const s of steps.filter(s => s.act === act)) {
        out.push("");
        const flags = [];
        if (s.wp && !s.isTown) flags.push("[wp]");
        const level = clean(s.level).replace(/\]/g, "");
        if (level) flags.push(`[lvl ${level}]`);
        if (cleanCond(s.cond)) flags.push(`[if ${cleanCond(s.cond)}]`);
        const name = s.isTown ? "Town" : cleanName(s.zone) || "Unnamed zone";
        out.push(flags.length ? `${name}  ${flags.join(" ")}` : name);
        const tasks = s.lines.filter(l => l.type === "task");
        const npcWidth = Math.max(0, ...tasks.map(l => clean(l.npc).length));
        for (const l of s.lines) {
          const cond = cleanCond(l.cond) ? `  [if ${cleanCond(l.cond)}]` : "";
          if (l.type === "task") out.push(`  ${clean(l.npc).padEnd(npcWidth)}  ${l.kind.padEnd(5)} ${clean(l.text)}`.trimEnd() + cond);
          else out.push(`  ${l.type.padEnd(6)} ${clean(l.text)}`.trimEnd() + cond);
        }
        if (clean(s.note)) out.push(`  note   ${clean(s.note)}`);
      }
    }
    return out.join("\n").replace(/^\n+/, "") + "\n";
  }

  // Wraps act text into the .js file loaded by index.html.
  function wrapFile(name, text) {
    const acts = [...new Set([...text.matchAll(/^==\s*Act\s+(\d+)/gim)].map(m => m[1]))];
    const title = acts.length ? "Act " + acts.join(", ") : "Guide steps";
    return `// ${title}. Format: see README.md in this folder. Only edit the text between the backticks.\n` +
      `GUIDE_ACTS.push({ name: ${JSON.stringify(name)}, text: String.raw\`\n\n${text}\n\`});\n`;
  }

  // The act text inside a .js file, or null if it doesn't look like an act file.
  function unwrapFile(js) {
    const start = js.indexOf("String.raw`");
    const end = js.lastIndexOf("`");
    return start < 0 || end <= start ? null : js.slice(start + "String.raw`".length, end);
  }

  return { ACTIONS, OPTIONAL_TEXT, TOWN_KINDS, TOWN_VIA, parse, matches, describe, serialize, wrapFile, unwrapFile };
})();
