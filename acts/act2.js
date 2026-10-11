// Act 2. Format: see README.md in this folder. Only edit the text between the backticks.
GUIDE_ACTS.push({ name: "act2.js", text: String.raw`

== Act 2

option den  Do the Den detour (White Beast, flask or belt reward)?  [yes|no]
option bandits  Which bandit do you help? (Alira: 15% all elemental resistances, Oak: +40 life, Kraitlin: 8% movement speed, kill all: 1 passive point)  [alira|oak|kraitlin|kill-all]

Southern Forest
  go     Town

Town
  go     Old Fields

Old Fields
  portal at the Den entrance  [if den]
  go     Crossroads

Crossroads  [wp]
  town   wp  [if den]
  go     Chamber of Sins Level 1  [if !den]

Town  [if den]
  go     Den (via portal)

Den  [if den]
  kill   White Beast
  town   logout

Town  [if den]
  Yeena  get   Flask or Belt
  go     Crossroads (via waypoint)

Crossroads  [if den]
  go     Chamber of Sins Level 1

Chamber of Sins Level 1
  go     Chamber of Sins Level 2

Chamber of Sins Level 2  [lvl 14]
  trial  Complete the Trial
  kill   Fidelitas
  item   Baleful Gem
  town   logout

Town
  Greust  get   Skill Gem
  go     Riverways

Riverways  [wp]
  go     Western Forest

Western Forest  [wp]
  go     Weaver's Chamber

Weaver's Chamber  [lvl 16]
  kill   Weaver
  item   Weaver's Spike
  town   logout

Town
  Silk  get   Support Gem
  go     Crossroads (via waypoint)  [if bandits!=kraitlin]
  go     Riverways (via waypoint)  [if bandits=kraitlin]

Crossroads  [if bandits!=kraitlin]
  go     Broken Bridge

Broken Bridge  [if bandits!=kraitlin]
  kill   Kraitlin
  town   logout

Town  [if bandits!=kraitlin]
  go     Riverways (via waypoint)  [if bandits=alira|kill-all]
  go     Western Forest (via waypoint)  [if bandits=oak]

Western Forest  [if bandits=oak]
  kill   Alira
  quest  Open the blockage
  town   logout

Town  [if bandits=oak]
  go     Riverways (via waypoint)

Riverways
  go     Wetlands

Wetlands  [wp]
  kill   Oak  [if bandits!=oak]
  quest  Help Oak  [if bandits=oak]
  item   Apex  [if bandits=oak]
  go     Western Forest (via waypoint)  [if bandits!=oak]
  town   wp  [if bandits=oak]

Western Forest  [if bandits!=oak]
  quest  Help Alira  [if bandits=alira]
  item   Apex  [if bandits=alira]
  kill   Alira  [if bandits!=alira]
  quest  Open the blockage
  town   logout

Town  [if bandits=kraitlin]
  go     Crossroads (via waypoint)

Crossroads  [if bandits=kraitlin]
  go     Broken Bridge

Broken Bridge  [if bandits=kraitlin]
  quest  Help Kraitlin
  item   Apex
  town   logout

Town
  Eramir  get   Apex  [if bandits=kill-all]
  Eramir  get   Passive Point  [if bandits=kill-all]
  go     Act 1 Town (via waypoint)

Town
  Bestel  get   Passive Point
  go     Act 2 Crossroads (via waypoint)

Crossroads
  go     Fellshrine Ruins

Fellshrine Ruins
  go     Crypt Level 1

Crypt Level 1
  trial  Complete the Trial
  go     Crypt Level 2

Crypt Level 2
  item   Golden Hand
  town   portal

Town
  Yeena  get   Passive Point
  go     Wetlands (via waypoint)

Wetlands
  go     Vaal Ruins

Vaal Ruins
  quest  Release the darkness
  go     Northern Forest

Northern Forest
  go     Caverns

Caverns
  go     Ancient Pyramid

Ancient Pyramid  [lvl 21]
  kill   Vaal Oversoul
  go     Act 3 entrance

`});
