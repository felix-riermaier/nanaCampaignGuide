// Act 4. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act4.js", text: String.raw`

== Act 4

Aqueduct  [wp]
  go     Town

Town
  go     Dried Lake

Dried Lake  [lvl 31]
  kill   Voll
  item   Deshret's Banner
  town   logout

Town
  go     Mines Level 1 (unlock with the banner)

Mines Level 1
  go     Mines Level 2

Mines Level 2
  quest  Free Deshret
  go     Crystal Veins

Crystal Veins  [wp]
  go     Daresso's Dream

Daresso's Dream
  go     Grand Arena

Grand Arena
  kill   Daresso
  item   Eye of Desire
  town   portal

Town
  Tasuni  get   Passive Point
  go     Crystal Veins (via waypoint)

Crystal Veins
  go     Kaom's Dream

Kaom's Dream
  go     Kaom's Stronghold

Kaom's Stronghold
  kill   Kaom
  item   Eye of Fury
  town   portal

Town
  go     Crystal Veins (via waypoint)

Crystal Veins
  quest  Unlock the Belly of the Beast
  go     Belly of the Beast Level 1

Belly of the Beast Level 1
  go     Belly of the Beast Level 2

Belly of the Beast Level 2
  kill   Piety
  quest  Talk to Piety
  go     Harvest

Harvest  [lvl 35]
  kill   Doedre
  kill   Maligaro
  kill   Shavronne
  kill   Malachai
  town   logout

Town
  Oyun         get   Skill Gem
  Lady Dialla  get   Support Gem
  go     Ascent

Ascent
  go     Act 5 entrance

`});
