// Act 1. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act1.js", text: String.raw`

== Act 1

Twilight Strand
  kill   Hillock
  go     Town

Town
  Tarkleigh  get   Skill Gem
  go     Coast

Coast  [wp]
  go     Mud Flats

Mud Flats
  item   Collect 3 quest items
  quest  Unlock Submerged Passage
  go     Submerged Passage

Submerged Passage  [wp]
  go     Coast (via waypoint)

Coast
  go     Tidal Island

Tidal Island  [lvl 4]
  kill   Hillraik
  item   Medicine Chest
  town   logout

Town
  Nessa      get   Quicksilver Flask
  Nessa      get   Support Gem
  Tarkleigh  get   Skill Gem
  go     Submerged Passage (via waypoint)

Submerged Passage
  go     Flooded Depths

Flooded Depths
  kill   Deep Dweller
  go     Submerged Passage (via exit next to Dweller)

Submerged Passage
  go     Ledge

Ledge
  go     Climb

Climb
  go     Lower Prison

Lower Prison  [wp]
  town   wp

Town
  Tarkleigh  get   Passive Point
  Nessa      get   Support Gem
  go     Lower Prison (via waypoint)

Lower Prison
  trial  Complete the Trial
  go     Upper Prison

Upper Prison  [lvl 10]
  kill   Brutus
  town   logout

Town
  Tarkleigh  get   Skill Gem
  go     Prisoner's Gate

Prisoner's Gate  [wp]
  go     Ship Graveyard

Ship Graveyard
  kill   Fairgraves
  go     Cavern of Wrath

Cavern of Wrath  [wp]
  town   wp

Town
  Nessa   get   Skill Gem
  Bestel  get   Passive Point
  go     Cavern of Wrath (via waypoint)

Cavern of Wrath
  go     Cavern of Anger

Cavern of Anger  [lvl 13]
  kill   Merveil
  go     Act 2 entrance

`});
