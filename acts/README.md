# Writing guide steps

Each act lives in its own file (`act1.js`, `act2.js`, …). Only edit the text between
the backticks. To add a new act file, also add a `<script src="acts/actN.js">` line to
`index.html` next to the one for `act1.js`.

Instead of editing by hand you can use `editor.html` (one folder up, next to `index.html`): open an act
file, edit the steps as cards and save. In Chrome and Edge, Save writes straight back
into the file. In other browsers it downloads the file instead. The editor rewrites the
file in a tidy layout and drops `#` comments.

If something can't be read, the page shows a red box listing the file, the line number
and what's wrong. The rest of the guide still loads.

## Example

```
== Act 1

Tidal Island  [lvl 4]
  kill   Hillraik
  item   Medicine Chest
  town   logout
  note   You want to be Lvl 4 before leaving

Town
  Nessa      get    Quicksilver Flask
  Tarkleigh  get    Lvl 4 Skill Gem
  Nessa      buy    Frostblink
  Bench      craft  Movement speed on boots
  exit   wp
  go     Submerged Passage
```

## Rules

- `== Act N` starts an act.
- A line **without indentation** starts a new step. It's either a zone name or the
  word `Town`.
- Lines **with indentation** (any number of spaces) say what to do in that step.
- Empty lines are ignored. Lines starting with `#` are comments and ignored too.
- Don't use backticks (`` ` ``) anywhere in the text.

### Step flags (after the zone name)

| Flag        | Meaning                                                       |
|-------------|---------------------------------------------------------------|
| `[wp]`      | Activate the waypoint in this zone (shown as a "WP" badge). Zone steps only. |
| `[lvl X]`   | Level breakpoint: be level X when this step is done, e.g. `[lvl 8–10]`. The last breakpoint of an act is also its end-of-act target. |

### Route options

Optional detours or route variants are declared once, right after `== Act N`:

```
option den  Do the Den detour (White Beast, flask or belt reward)?  [yes|no]
```

That's `option`, a short name, the question shown to the player, then the choices. The
first choice is the default. The player picks their route in the guide's "Route" dialog,
which opens on a fresh start.

Steps and lines then say when they apply, with `[if …]`:

```
Crossroads  [wp]
  town   wp                       [if den]
  go     Chamber of Sins Level 1  [if !den]

Den  [if den]
  kill   White Beast
```

| Condition         | Applies when                            |
|-------------------|-----------------------------------------|
| `[if den]`        | option `den` is `yes`                   |
| `[if !den]`       | option `den` is `no`                    |
| `[if bandits=oak]`, `[if bandits=oak\|alira]` | option is one of these choices |
| `[if bandits!=all]` | option is none of these choices       |

On a step it goes with the other flags. On a line it goes at the very end. Steps and
lines without a condition always apply. Skipped town visits don't count towards the
"Town visit N" numbering. Changing the route mid-run keeps the player's progress.

### Notes

Every step (zone or town) can have one note: `note <text>`, shown in grey below the step.
It isn't something to do, just a hint. Put it after the other lines. If a step has
several `note` lines, they're joined into one.

### Zone steps

A zone step is ticked off as a whole. Its lines are what to do there, shown in this order.

| Keyword | Meaning                          | Example                          |
|---------|----------------------------------|----------------------------------|
| `kill`  | Kill a boss                      | `kill Brutus`                    |
| `item`  | Collect a quest item             | `item Allflame`                  |
| `quest` | Other quest action (activate, unlock, trial…) | `quest Complete the Trial` |
| `go`    | Get to another zone              | `go Ledge`                       |
| `town`  | Back to town: `logout`, `portal` or `wp` | `town logout`            |
| `trial` | Labyrinth trial (text optional)  | `trial`                          |
| `portal`| Place a portal (where is optional) | `portal at the bridge`         |
| `do`    | Anything else                    | `do Open the strongbox`          |

### Town visits

Town tasks are grouped by NPC and can be ticked off one by one. Any open ones stay at the
top of the page under "Missed" until they're done.

| Line                         | Meaning                                        |
|------------------------------|------------------------------------------------|
| `<NPC> get <text>`           | Collect a quest reward                         |
| `<NPC> buy <text>`           | Buy something                                  |
| `<NPC> talk <text>`          | Talk to the NPC                                |
| `Bench craft <text>`         | Use the crafting bench (`Bench` acts as the NPC name) |
| `exit <how>`                 | How to leave town: `portal`, `wp` or any text  |
| `go <zone>`                  | Where to go after the town visit               |

NPC names can contain spaces (`Lady Dialla get …`).

## Saved progress

A player's progress is saved by step position within its zone. For example, the second
"Ship Graveyard" step in Act 1, or Act 1's 4th town visit. Town tasks are saved by NPC and
their position under that NPC within the visit.

- Changing a step's text, notes or flags is always safe.
- Adding or removing a step only affects progress on later steps with the **same zone
  name** in that act (or later town visits).
- Changing an NPC name or reordering an NPC's tasks clears the saved ticks for those tasks.
