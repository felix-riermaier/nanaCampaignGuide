// Act 6. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act6.js", text: String.raw`

== Act 6

Town
  Lilly Roth  talk  Set sail to start the act

Town
  go     Coast

Coast
  go     Mud Flats

Mud Flats
  kill   Dishonoured Queen
  quest  Unlock the Karui Fortress
  go     Karui Fortress

Karui Fortress
  kill   Tukohama
  go     Ridge

Ridge  [wp]
  go     Lower Prison

Lower Prison
  trial  Complete the Trial
  go     Shavronne's Tower

Shavronne's Tower
  kill   Shavronne
  kill   Brutus
  go     The Warden's Quarters

Warden's Quarters
  do     Collect crafting recipe
  go     Prisoner's Gate

Prisoner's Gate
  kill   Abberath
  go     Western Forest

Western Forest
  go     Riverways

Riverways  [wp]
  go     Wetlands

Wetlands
  kill   Ryslatha
  town   portal

Town
  go     Twilight Strand

Twilight Strand
  do     Full clear the zone
  town   logout

Town
  Lilly Roth  get   Respec Points
  Tarkleigh   get   Passive Point
  Tarkleigh   get   Rare Helmet
  Tarkleigh   get   Passive Point
  Bestel      get   Passive Point
  go     Riverways (via waypoint)

Riverways
  go     Southern Forest

Southern Forest
  go     Cavern of Anger

Cavern of Anger
  item   Black Flag
  go     Beacon

Beacon
  quest  Activate the Beacon
  go     Brine King's Reef

Brine King's Reef  [lvl 46]
  kill   Brine King
  go     Act 7 entrance

`});
