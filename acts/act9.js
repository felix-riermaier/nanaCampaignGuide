// Act 9. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act9.js", text: String.raw`

== Act 9

Blood Aqueduct  [wp] [lvl 60]
  go     Town

Town
  go     Descent

Descent
  go     Vastiri Desert

Vastiri Desert  [wp]
  item   Storm Blade
  go     Foothills

Foothills  [wp]
  go     Boiling Lake

Boiling Lake
  kill   Basilisk
  item   Basilisk Acid
  town   portal

Town
  Sin                talk  To make Petarus and Vanja give you the bottle
  Petarus and Vanja  get   Bottled Storm
  Petarus and Vanja  get   Rare Weapon or Offhand
  go     Vastiri Desert (via waypoint)

Vastiri Desert
  quest  Unlock the Oasis
  go     Oasis

Oasis
  kill   Shakari
  town   portal

Town
  go     Foothills (via waypoint)

Foothills
  go     Tunnel

Tunnel
  trial  Complete the Trial
  go     Quarry

Quarry  [wp]
  go     Refinery

Refinery
  item   Trarthan Powder
  town   portal

Town
  go     Quarry (via waypoint)

Quarry
  kill   Garukhan
  town   portal

Town
  Irasha  get   2 Passive Points
  go     Quarry (via waypoint)

Quarry
  quest  Unlock the Belly of the Beast
  go     Belly of the Beast

Belly of the Beast
  go     Rotting Core

Rotting Core  [lvl 62]
  kill   Depraved Trinity
  go     Act 10 entrance

`});
