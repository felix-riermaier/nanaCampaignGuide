// Act 8. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act8.js", text: String.raw`

== Act 8

Sarn Ramparts  [wp]
  go     Town

Town
  go     Toxic Conduits

Toxic Conduits
  go     Doedre's Cesspool

Doedre's Cesspool
  kill   Doedre
  go     Quay

Quay
  item   Ankh of Eternity
  kill   Tolman
  go     Grain Gate

Grain Gate
  kill   Gemling Legion
  go     Imperial Fields

Imperial Fields
  go     Solaris Concourse

Solaris Concourse
  go     Solaris Temple Level 1

Solaris Temple Level 1  [wp]
  go     Solaris Temple Level 2

Solaris Temple Level 2
  kill   Dawn
  item   Sun Orb
  town   logout

Town
  go     Solaris Temple Level 1 (via waypoint)

Solaris Temple Level 1
  go     Solaris Concourse

Solaris Concourse  [wp]
  go     Harbour Bridge

Harbour Bridge
  go     Lunaris Concourse

Lunaris Concourse  [wp]
  go     Lunaris Temple Level 1

Lunaris Temple Level 1
  go     Lunaris Temple Level 2

Lunaris Temple Level 2
  kill   Dusk
  item   Moon Orb
  town   logout

Town
  Maramoa   get   Passive Point
  Clarissa  get   Passive Point
  go     Solaris Concourse (via waypoint)

Solaris Concourse
  go     Harbour Bridge

Harbour Bridge  [lvl 54]
  kill   Solaris and Lunaris
  go     Act 9 entrance

`});
