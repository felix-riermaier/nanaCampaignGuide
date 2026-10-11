# nanaCampaignGuide

An interactive leveling guide for the **Path of Exile 1** campaign, Acts 1 to 10.

**Open the guide: https://felix-riermaier.github.io/nanaCampaignGuide/**

## What it is

- A step-by-step route through the whole campaign. It isn't tied to a class or build.
- An efficient route: most quests that don't give anything essential are skipped, and some
  quest rewards are picked up later on purpose, on a town visit you make anyway.
- Essentially how I run my own campaigns. It doesn't use every portal trick, so it isn't a
  speedrun route.

## How it works

- The guide always shows the step you're on: where you are, what to do there, and one big
  button for where to go next. Press it (or <kbd>Space</kbd>) when you're done.
- Town visits list their rewards by NPC. Tick them as you collect them; anything you leave
  open shows up as "Missed" until you get it.
- Level targets show which level to reach by when.
- Route settings let you pick optional parts: the Den, which bandit to help, the Library and
  the Silver Locket.
- Your progress is saved in your browser only. Nothing is sent anywhere: the page doesn't
  load anything from other servers and has no tracking.

## Make your own route

The route lives in plain-text files, one per act (`acts/act1.js` … `act10.js`), and comes
with a visual editor:

1. Download this repository (Code → Download ZIP) and unpack it.
2. Open `editor.html` in Chrome or Edge, click "Open…" and pick an act file from the
   `acts` folder. Edit the steps as cards, then save. Chrome and Edge write straight back
   into the file; other browsers download the changed file instead.
3. Open `index.html` to see the guide with your changes.

The file format is described in [`acts/README.md`](acts/README.md), if you'd rather edit the
files by hand.

## License

The guide and its route are released under the [MIT License](LICENSE): use them, change
them and build on them however you like.

The fonts in `fonts/` are [Cinzel](https://github.com/NDISCOVER/Cinzel) and
[Crimson Pro](https://github.com/Fonthausen/CrimsonPro), both under the SIL Open Font
License 1.1 (see the license files next to them).

This is a fan-made guide, not affiliated with or endorsed by Grinding Gear Games. Path of
Exile and the names of its zones, bosses and items belong to Grinding Gear Games.
