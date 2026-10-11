// Act 7. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act7.js", text: String.raw`

== Act 7

option locket  Get the Silver Locket in the Broken Bridge castle (flask reward from Weylam)?  [yes|no]

Town
  go     Broken Bridge

Broken Bridge
  item   Silver Locket  [if locket]
  go     Crossroads

Crossroads  [wp]
  go     Fellshrine Ruins

Fellshrine Ruins
  go     Crypt

Crypt
  trial  Complete the Trial
  item   Maligaro's Map
  town   logout

Town
  go     Crossroads (via waypoint)

Crossroads
  go     Chamber of Sins Level 1

Chamber of Sins Level 1
  quest  Open Maligaro's Map in the map device
  go     Maligaro's Sanctum

Maligaro's Sanctum
  kill   Maligaro
  go     Chamber of Sins Level 1

Chamber of Sins Level 1
  quest  Get the key from Silk
  go     Chamber of Sins Level 2

Chamber of Sins Level 2
  trial  Complete the Trial
  go     Den

Den
  go     Ashen Fields

Ashen Fields
  kill   Ralakesh
  go     Northern Forest

Northern Forest  [wp]
  portal at the Dread Thicket entrance
  go     Causeway

Causeway
  item   Kishara's Star
  go     Vaal City

Vaal City  [wp]
  town   wp

Town
  go     Northern Forest (via portal)

Northern Forest
  go     Dread Thicket

Dread Thicket
  item   7 Fireflies
  kill   Gruthkul
  town   logout

Town
  go     Vaal City (via waypoint)

Vaal City
  quest  Give Fireflies to Yeena
  town   wp

Town
  Weylam  get   Flask  [if locket]
  Weylam  get   Passive Point
  Eramir  get   2 Passive Points
  Helena  get   Rare Boots (don't take quest item)
  go     Labyrinth

Labyrinth
  do     Complete the Labyrinth
  town   portal

Town
  go     Vaal City (via waypoint)

Vaal City
  go     Temple of Decay Level 1

Temple of Decay Level 1
  go     Temple of Decay Level 2

Temple of Decay Level 2  [lvl 50]
  kill   Arakaali
  go     Act 8 entrance

`});
