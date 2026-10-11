// Act 3. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act3.js", text: String.raw`

== Act 3

option library  Do the Library detour (Siosa: Lvl 31 and off-class support gems)?  [yes|no]

City of Sarn
  quest  Talk to Clarissa
  go     Town

Town
  go     Slums

Slums
  go     Crematorium

Crematorium
  trial  Complete the Trial
  kill   Piety
  item   Tolman's Bracelet
  town   logout

Town
  Maramoa  get   Skill Gem
  go     Slums

Slums
  quest  Unlock the Sewers
  go     Sewers

Sewers  [wp]
  item   3 Busts
  go     Marketplace

Marketplace  [wp]
  go     Catacombs

Catacombs
  trial  Complete the Trial
  town   logout

Town
  Hargan  get   Passive Point
  go     Marketplace (via waypoint)

Marketplace
  go     Battlefront

Battlefront  [wp] [lvl 24]
  item   Ribbon Spool
  go     Docks

Docks  [lvl 26]
  item   Thaumetic Sulphite
  town   logout

Town
  go     Battlefront (via waypoint)

Battlefront
  go     Solaris Temple Level 1

Solaris Temple Level 1
  go     Solaris Temple Level 2

Solaris Temple Level 2  [wp]
  quest  Talk to Lady Dialla
  do     Grab the fire craft from the side room (optional)
  go     Sewers (via waypoint)

Sewers
  quest  Unlock the blockage
  go     Ebony Barracks

Ebony Barracks  [wp]
  kill   General Gravicus
  go     Lunaris Temple Level 1

Lunaris Temple Level 1
  go     Lunaris Temple Level 2

Lunaris Temple Level 2  [lvl 27]
  kill   Piety
  item   Tower Key
  town   logout

Town
  Grigor   get   Passive Point
  Maramoa  get   Skill Gem
  go     Ebony Barracks (via waypoint)

Ebony Barracks
  go     Imperial Gardens

Imperial Gardens  [wp]
  go     Library  [if library]
  trial  Complete the Trial  [if !library]
  town   logout  [if !library]

Library  [wp] [if library]
  go     Archives

Archives  [if library]
  item   4 Golden Pages
  town   logout

Town  [if library]
  go     Library (via waypoint)

Library  [if library]
  quest  Talk to Siosa
  go     Imperial Gardens

Imperial Gardens  [if library]
  trial  Complete the Trial
  town   logout

Town
  go     Labyrinth

Labyrinth  [lvl 28]
  do     Complete the Labyrinth
  town   portal

Town
  go     Imperial Gardens (via waypoint)

Imperial Gardens
  go     Sceptre of God

Sceptre of God
  go     Upper Sceptre of God

Upper Sceptre of God  [lvl 29]
  kill   Dominus
  go     Act 4 entrance

`});
