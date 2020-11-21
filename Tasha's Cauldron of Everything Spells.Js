var iFileName = "Tasha's Cauldron of Everything Spells [Transcribed by Cosaur].js";

SourceList["TCoE"] = {
	name : "Tasha's Cauldron of Everything",
	abbreviation : "TCoE",
	group : "Wizards of the Coast",
	url : "https://www.dndbeyond.com/sources/tcoe"
};

SpellsList["blade of disaster"] = { 
	name : "Blade of Disaster", 
	classes : ["sorcerer", "warlock", "wizard"], 
	source : ["T", 106], 
	level : 9, 
	school : "Conj", 
	time : "1 bns", 
	range : "60 ft", 
	components : "V,S", 
	duration : "Conc, 1 min", 
	description : "Create weapon; spell attack 4d12 force; crit 18+; 3 * crit damage; bns to move 30ft 2 attacks", 
	descriptionFull : "You create a blade-shaped planar rift about 3 feet long in an unoccupied space you can see within range. The blade lasts for the duration. When you cast this spell, you can make up to two melee spell attacks with the blade, each one against a creature, loose object, or structure within 5 feet of the blade. On a hit, the target takes 4d12 force damage. This attack scores a critical hit if the number on the d20 is 18 or higher. On a critical hit, the blade deals an extra 8d12 force damage (for a total of 12d12 force damage)." + "\n   " + "As a bonus action on your turn, you can move the blade up to 30 feet to an unoccupied space you can see and then make up to two melee spell attacks with it again." + "\n   " + "The blade can harmlessly pass through any barrier, including a wall of force.", 
};

SpellsList["booming blade-tcoe"] = {
	name : "Booming Blade",
	classes : ["sorcerer", "warlock", "wizard"], // Artificer
	source : ["T", 106],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,M\u0192",
	compMaterial : "A weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; hit: 0d8 Thunder dmg, if it moves next rnd +1d8; +1d8 at CL5, 11, \u0026 17",
	descriptionCantripDie : "Melee wea atk with cast; if hit: `CD-1`d8 Thunder dmg and if it moves next round +`CD`d8 Thunder dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects and then becomes sheathed in booming energy until the start of your next turn. If the target willingly moves 5 feet or more before then, the target takes 1d8 thunder damage, and the spell ends.\n   This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 thunder damage to the target, and the damage the target takes for moving increases to 2d8. Both damage rolls increase by 1d8 at 11th level and 17th level."
};

SpellsList["dream of the blue veil"] = {
	name : "Dream of the Blue Veil",
	classes : ["bard", "sorcerer", "warlock", "wizard"],
	source : ["T", 106],
	level : 7,
	school : "Conj",
	time : "10 min",
	range : "20 feet",
	components : "V,S,M",
	compMaterial : "A magic item or a willing creature from the destination world",
	duration : "6 hours",
	description : "9 willing crea unconscious; if spell concludes, travel to the material component's origin material plane",
	descriptionFull : "You and up to eight willing creatures within range fall unconscious for the spell's duration and experience visions of another world on the Material Plane, such as Oerth, Toril, Krynn, or Eberron. If the spell reaches its full duration, the visions conclude with each of you encountering and pulling back a mysterious blue curtain. The spell then ends with you mentally and physically transported to the world that was in the visions." + "\n   " + "To cast this spell, you must have a magic item that originated on the world you wish to reach, and you must be aware of the world's existence, even if you don't know the world's name. Your destination in the other world is a safe location within 1 mile of where the magic item was created. Alternatively, you can cast the spell if one of the affected creatures was born on the other world, which causes your destination to be a safe location within 1 mile of where that creature was born."  + "\n   " + "The spell ends early on a creature if that creature takes any damage, and the creature isn't transported. If you take any damage, the spell ends for you and all the other creatures, with none of you being transported."
};

SpellsList["green-flame blade-tcoe"] = {
	name : "Green-Flame Blade",
	classes : ["sorcerer", "warlock", "wizard"], // Artificer
	source : ["T", 107],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "5-ft rad",
	components : "V,M\u0192",
	compMaterial : "A weapon worth at least 1 sp",
	duration : "Instantaneous",
	description : "Melee wea atk with cast; atk +0d8 Fire dmg, crea in 5 ft 0d8+spell mod Fire dmg; +1d8 at CL5/11/17",
	descriptionCantripDie : "Melee wea atk with cast; if hit, atk does +`CD-1`d8 Fire dmg, 1 crea in 5 ft `CD-1`d8+spellcasting ability modifier Fire dmg",
	descriptionFull : "You brandish the weapon used in the spell's casting and make a melee attack with it against one creature within 5 feet of you. On a hit, the target suffers the weapon attack's normal effects, and you can cause green fire to leap from the target to a different creature of your choice that you can see within 5 feet of it. The second creature takes fire damage equal to your spellcasting ability modifier.\n   This spell's damage increases when you reach higher levels. At 5th level, the melee attack deals an extra 1d8 fire damage to the target, and the fire damage to the second creature increases to 1d8 + your spellcasting ability modifier. Both damage rolls increase by 1d8 at 11th level and 17th level."
};

SpellsList["intellect fortress"] = {
	name : "Intellect Fortress",
	classes : ["bard", "sorcerer", "warlock", "wizard"], // Artificer
	source : ["T", 107],
	level : 3,
	school : "Abjur",
	time : "1 a",
	range : "30 feet",
	components : "V",
	duration : "Conc, 1 h",
	description : "1+1/SL creatures resistant to psychic and advantage on Int, Wis, and Cha saves",
	descriptionFull : "For the duration, you or one willing creature you can see within range has resistance to psychic damage, as well as advantage on Intelligence, Wisdom, and Charisma saving throws."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The creatures must be within 30 feet of each other when you target them."
};

SpellsList["lightning lure-tcoe"] = {
	name : "Lightning Lure",
	classes : ["sorcerer", "warlock", "wizard"], // Artificer
	source : ["T", 107],
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "15-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Str",
	description : "1 crea I see save or pulled 10 ft to me; if it end in 5 ft, 1d8 Lightning dmg; +1d8 at CL 5, 11, and 17",
	descriptionCantripDie : "1 crea I see save or pulled 10 ft to me; if it end in 5 ft, `CD`d8 Lightning dmg",
	descriptionFull : "You create a lash of lightning energy that strikes at one creature of your choice that you can see within range. The target must succeed on a Strength saving throw or be pulled up to 10 feet in a straight line toward you and then take 1d8 lightning damage if it is within 5 feet of you." + "\n   " + "This spell's damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
};

SpellsList["mind sliver"] = {
	name : "Mind Sliver",
	classes : ["sorcerer", "warlock", "wizard"],
	source : ["T", 108],
	level : 0,
	school : "Ench",
	time : "1 a",
	range : "60 feet",
	components : "V",
	duration : "1 rnd",
    description : "1 crea I see save or -1d4 from next save and 1d6 Psychic dmg; +1d6 at CL 5, 11, and 17",
    descriptionCantripDie : "1 crea I see save or -1d4 from next save and `CD`d6 Psychic dmg",
	descriptionFull : "You drive a disorienting spike of psychic energy into the mind of one creature you can see within range. The target must succeed on an Intelligence saving throw or take 1d6 psychic damage and subtract 1d4 from the next saving throw it makes before the end of your next turn." + "\n   " + "This spell's damage increases by 1d6 when you reach certain levels: 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

SpellsList["spirit shroud"] = {
	name : "Spirit Shroud",
	classes : ["cleric", "paladin", "warlock", "wizard"],
	source : ["T", 108],
	level : 3,
	school : "Necro",
	time : "1 bns",
	range : "Self",
	components : "V,S",
	duration : "Conc, 1 min",
    description : "Attack in 10ft 1d8+1d8/SL Nec/Rad/Cld dmg + no heal until start of next turn; slow crea if start in 10 ft",
	descriptionFull : "You call forth spirits of the dead, which flit around you for the spell's duration. The spirits are intangible and invulnerable." + "\n   " + "Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is radiant, necrotic, or cold (your choice when you cast the spell). Any creature that takes this damage can't regain hit points until the start of your next turn." + "\n   " + "In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its speed reduced by 10 feet until the start of your next turn." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for every two slot levels above 3rd."
};

SpellsList["summon abberation"] = {
	name : "Summon Abberation",
	classes : ["warlock", "wizard"],
	source : ["T", 109],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A pickled tentacle and an eyeball in a platinum-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Abberant Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth an aberrant spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Aberrant Spirit stat block. When you cast the spell, choose Beholderkin, Slaad, or Star Spawn. The creature resembles an aberration of that kind, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon beast"] = {
	name : "Summon Beast",
	classes : ["druid", "ranger"],
	source : ["T", 109],
	level : 2,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A feather, tuft of fur, and fish tail inside a gilded acorn worth at least 200 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Bestial Spirit; obeys commands after my turn; dissapears at 0 hp (200gp)",
	descriptionFull : "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon celestial"] = {
	name : "Summon Celestial",
	classes : ["cleric", "paladin"],
	source : ["T", 110],
	level : 5,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A golden reliquary worth at least 500 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Celestial Spirit; obeys commands after my turn; dissapears at 0 hp (500gp)",
	descriptionFull : "You call forth a celestial spirit. It manifests in an angelic form in an unoccupied space that you can see within range. This corporeal form uses the Celestial Spirit stat block. When you cast the spell, choose Avenger or Defender. Your choice determines the creature's attack in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon construct"] = {
	name : "Summon Construct",
	classes : ["wizard"], // Artificer
	source : ["T", 111],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "An ornate stone and metal lockbox worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Construct Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth the spirit of a construct. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Construct Spirit stat block. When you cast the spell, choose a material: Clay, Metal, or Stone. The creature resembles a golem or a modron (your choice) made of the chosen material, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon elemental"] = {
	name : "Summon Elemental",
	classes : ["druid", "ranger", "wizard"],
	source : ["T", 111],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Air, a pebble, ash, and water inside a gold-inlaid vial worth at least 400 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Elemental Spirit; obeys commands after my turn; dissapears at 0 hp (400gp)",
	descriptionFull : "You call forth an elemental spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Elemental Spirit stat block. When you cast the spell, choose an element: Air, Earth, Fire, or Water. The creature resembles a bipedal form wreathed in the chosen element, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon fey"] = {
	name : "Summon Fey",
	classes : ["druid", "ranger", "warlock", "wizard"],
	source : ["T", 112],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded flower worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fey Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth a fey spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a fey creature of your choice marked by the chosen mood, which determines one of the traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon fiend"] = {
	name : "Summon Fiend",
	classes : ["warlock", "wizard"],
	source : ["T", 112],
	level : 6,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Humanoid blood inside a ruby vial worth at least 600 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Fiendish Spirit; obeys commands after my turn; dissapears at 0 hp (600gp)",
	descriptionFull : "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a fiend of the chosen type, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon shadowspawn"] = {
	name : "Summon Shadowspawn",
	classes : ["warlock", "wizard"],
	source : ["T", 113],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "Tears inside a gem worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Shadow Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["summon undead"] = {
	name : "Summon Undead",
	classes : ["warlock", "wizard"],
	source : ["T", 114],
	level : 3,
	school : "Necro",
	time : "1 a",
	range : "90 ft",
    components : "V,S,M\u0192",
    compMaterial : "A gilded skull worth at least 300 gp",
	duration : "Conc, 1 h",
    description : "Summon choice of Undead Spirit; obeys commands after my turn; dissapears at 0 hp (300gp)",
	descriptionFull : "You call forth an undead spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Undead Spirit stat block. When you cast the spell, choose the creature's form: Ghostly, Putrid, or Skeletal. The spirit resembles an undead creature with the chosen form, which determines certain traits in its stat block. The creature disappears when it drops to 0 hit points or when the spell ends." + "\n   " + "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don't issue any, it takes the Dodge action and uses its move to avoid danger." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, use the higher level wherever the spell's level appears in the stat block."
};

SpellsList["sword burst-tcoe"] = {
	name : "Sword Burst",
	classes : ["sorcerer", "warlock", "wizard"], // Artificer
	source : ["T", 115],
	level : 0,
	school : "Conj",
	time : "1 a",
	range : "5-ft rad",
	components : "V",
	duration : "Instantaneous",
	save : "Dex",
	description : "All crea in range save or 1d6 Force damage; +1d6 at CL 5, 11, and 17",
	descriptionCantripDie : "All crea in range save or `CD`d6 Force damage",
	descriptionFull : "You create a momentary circle of spectral blades that sweep around you. All other creatures within 5 feet of you must succeed on a Dexterity saving throw or take 1d6 force damage" + "\n   " + "This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
};

SpellsList["tasha's caustic brew"] = {
    name : "Tasha's Caustic Brew",
    nameAlt : "Caustic Brew",
	classes : ["sorcerer", "wizard"], // Artificer
	source : ["T", 115],
	level : 1,
	school : "Evoc",
	time : "1 a",
	range : "30-ft line",
    components : "V,S,M",
    compMaterial : "A bit of rotten food",
	duration : "Conc, 1 min",
    description : "Crea in line save or 2d4+2d4/SL Acid dmg at start of turn; action remove from self or adjacent crea",
	descriptionFull : "A stream of acid emanates from you in a line 30 feet long and 5 feet wide in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw or be covered in acid for the spell's duration or until a creature uses its action to scrape or wash the acid off itself or another creature. A creature covered in the acid takes 2d4 acid damage at start of each of its turns."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d4 for each slot level above 1st."
};

SpellsList["tasha's mind whip"] = {
    name : "Tasha's Mind Whip",
    nameAlt : "Mind Whip",
	classes : ["sorcerer", "wizard"], // Artificer
	source : ["T", 115],
	level : 2,
	school : "Ench",
	time : "1 a",
	range : "90 ft",
    components : "V",
	duration : "1 rnd",
    description : "1+1/SL save or 3d6 Psychic dmg, save halves; loses reaction; can only move, action, or bns next turn",
	descriptionFull : "You psychically lash out at one creature you can see within range. The target must make an Intelligence saving throw. On a failed save, the target takes 3d6 psychic damage, and it can't take a reaction until the end of its next turn. Moreover, on its next turn, it must choose whether it gets a move, an action, or a bonus action; it gets only one of the three. On a successful save, the target takes half as much damage and suffers none of the spell's other effects."  + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd. The creatures must be within 30 feet of each other when you target them."
};

SpellsList["tasha's otherwordly guise"] = {
    name : "Tasha's Otherwordly Guise",
    nameShort : "Tash. Otherwordly Guise",
    nameAlt : "Otherwordly Guise",
	classes : ["sorcerer", "wizard"], // Artificer
	source : ["T", 116],
	level : 6,
	school : "Trans",
	time : "1 bns",
	range : "Self",
    components : "V,S,M\u0192",
    compMaterial : "An object engraved with a symbol of the Outer Planes, worth at least 500 gp",
	duration : "Conc, 1 min",
    description : "Fire+Poison+Poisoned or Radiant+Necrotic+Charm immune; 40ft fly; +2 ac; extra atk (500gp)",
    descriptionFull : "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:" + "\n \u2022 " + "You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes)." + "\n \u2022 " + "You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes)." + "\n \u2022 " + "Spectral wings appear on your back, giving you a flying speed of 40 feet." + "\n \u2022 " + "You have a +2 bonus to AC." + "\n \u2022 " + "All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls." + "\n \u2022 " + "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn."
};