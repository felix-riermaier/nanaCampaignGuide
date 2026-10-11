// Act 10. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act10.js", text: String.raw`

== Act 10

Town
  go     Cathedral Rooftop

Cathedral Rooftop
  quest  Save Bannon
  go     Ravaged Square

Ravaged Square  [wp]
  portal at the Blood Fountain
  go     Torched Courts

Torched Courts
  go     Desecrated Chambers

Desecrated Chambers  [wp]
  kill   Avarius
  item   Staff of Avarius
  town   wp

Town
  go     Ravaged Square (via portal)

Ravaged Square
  go     Control Blocks

Control Blocks
  kill   Vilenta
  town   logout

Town
  go     Ravaged Square (via waypoint)

Ravaged Square
  quest  Talk to Innocence to unlock the Canals
  go     Ossuary

Ossuary
  trial  Complete the Trial
  item   Elixir of Allure
  town   logout

Town
  Bannon  talk  Report that Vilenta is dead
  Weylam  get   Respec Points
  Lani    get   Rare Body Armour
  Lani    get   Passive Point
  go     Act 8 Lunaris Concourse (via waypoint)

Lunaris Concourse
  go     Bath House

Bath House
  trial  Complete the Trial
  go     High Gardens

High Gardens
  kill   Yugul
  town   portal

Town
  Hargan  get   Passive Point
  go     Labyrinth

Labyrinth
  do     Complete the Labyrinth
  town   portal

Town
  go     Ravaged Square (via waypoint)

Ravaged Square
  go     Canals

Canals
  go     Feeding Trough

Feeding Trough
  kill   Kitava
  town   portal

Town
  Lani  get   2 Passive Points
  go     Karui Shores

Karui Shores  [lvl 64]
  do     Collect movement speed craft

`});
