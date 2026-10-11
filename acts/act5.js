// Act 5. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act5.js", text: String.raw`

== Act 5

Slave Pens  [wp]
  kill   Overseer Krow
  go     Town

Town
  go     Control Blocks

Control Blocks
  item   Miasmeter
  kill   Justicar Casticus
  item   Eyes of Zeal
  go     Oriath Square

Oriath Square  [wp]
  quest  Unlock the Templar Courts
  go     Templar Courts

Templar Courts
  go     Chamber of Innocence

Chamber of Innocence  [lvl 41]
  kill   Innocence
  go     Torched Courts

Torched Courts
  go     Ruined Square

Ruined Square  [wp]
  go     Ossuary

Ossuary
  item   Sign of Purity
  town   logout

Town
  go     Ruined Square (via waypoint)

Ruined Square
  portal next to the stairs towards Kitava
  go     Reliquary

Reliquary  [wp]
  item   3 Kitava's Torments
  town   wp

Town
  Lani     get   Rare Ring
  Lani     get   Rare Jewel
  Lani     get   Passive Point
  Vilenta  get   Passive Point
  go     Ruined Square (via portal)

Ruined Square
  go     Cathedral Rooftop

Cathedral Rooftop  [lvl 42]
  kill   Kitava
  go     Act 6 entrance

`});
