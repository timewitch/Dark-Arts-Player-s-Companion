SourceList["DAPC"] = {
	name : "Dark Arts Player's Companion by Jonoman3000",
	abbreviation : "DAPC",
	group : "Homebrew", // was missig a comma at the end
	url : "https://drive.google.com/file/d/0B-g9vLTX0eHKUWgxclhVU0c4dEE/view"
};

RaceList["mummy"] = { 
	regExpSearch : /mummy/i, 
	name : "Mummy", 
	source : ["DAPC", 3],
	plural : "Mummies", 
	improvements : "Mummy: +2 Strength, +1 Constitution;",
	scores : [2, 0, 1, 0, 0, 0, 0],
	age : "As beings of undeath, mummies do not age or mature, and we may live for thousands of years if undisturbed.",
	size : 3,
	speed : [25, 15],
	vision : "Darkvision 60 ft",
	languages : ["Common", "+1 from Mummy"],
	dmgres : ["poison"],
	savetxt : "I am immune to disease and to being poisoned",
	trait : "Mummy (+2 Strength, +1 Constitution)"\nUndead:\nI am considered undead for effects such as turn undead and many healing spells.\nI am immune to disease and being poisoned.\nI do not need to eat or breathe, but I can can ingest food or drink if I wish.\nInstead of sleeping, I enter an inactive state for 4 hours each day. I do not dream in this state, but resting in this way is otherwise identical to sleeping. Magically induced sleep can cause me to enter this inactive state.", 
	features : {
		"dreadful glare" : { 
			name : "Dreadful Glare",
			minlevel : 1,
			usages : 1,
			recovery : "short rest", 
			tooltip : " (Dreadful Glare)", 
			action : ["action", ""],
			description : "As an action, I can target one creature I can see within 10 feet of me. The target must succeed on a Wisdom saving throw or become frightened of me until the end of my next turn. The DC for this saving throw equals 8 + my Constitution modifier + my Proficiency bonus."],
		},
		"rotting fist" : { 
			name : "Rotting Fist",
			minlevel : 1, 
			tooltip : " (Rotting Fist)", 
			calcChanges : {
				atkAdd : ["if ((/unarmed strike/i).test(WeaponName)) { fields.Damage_Type = 'Necrotic'; if (fields.Damage_Die == 1) {fields.Damage_Die = '1d4'; }; }; ",
				description : "My hands rot those they touch. When I make unarmed attacks against creatures with them, I deal necrotic damage equal to 1d4 + my Strength modifier, instead of the bludgeoning damage normal for an unarmed attack.",
			}
		}
	}
};
RaceList["wight"] = {
	regExpSearch : /wight/i,
	name : "Wight",
	source : ["DAPC", 4],
	plural : "Wights",
	improvements : "Wight: +2 Constitution, +1 Charisma;",
	scores : [0, 0, 2, 0, 0, 1],
	age : "As beings of undeath, Wights do not age or mature, and we may live for thousands of years if we are not killed in battle.",
	size : 3, 
	speed : [30, 20],
	vision : "Darkvision 60 ft; Sunlight Sensitivity",
	languages : ["Common", "+1 from Wight"],
	dmgres : ["poison"],
	savetxt : "I am immune to disease and to being poisoned",
	trait : "Wight (+2 Constitution, +1 Charisma)"\nUndead: I am considered undead for effects such as turn undead and many healing spells.\nI am immune to disease and being poisoned.\nI do not need to eat or breathe, but I can can ingest food or drink if I wish.\nInstead of sleeping, I enter an inactive state for 4 hours each day. I do not dream in this state, but resting in this way is otherwise identical to sleeping. Magically induced sleep can cause me to enter this inactive state.",
	features : {
		"life drain" : {
			name : "Life Drain",
			minlevel : 1,
			tooltip : " (Life Drain)",
			action : ["action", ""], 
			description : ""When I kill a humanoid, I can choose to have it rise 24 hours later as a zombie under my control, unless it is restored to life or its body is destroyed.n\Only one zombie may be created through this ability at any one time, if another is created then the first becomes inanimate.n\The zombie has the statistics of the Zombie (Monster Manual pg. 316), except its hp value is instead equal to three times my level.",
			}
		}
	}
};
RaceList["shadar-kai"] = {
	regExpSearch : /shadar-kai/i,
	name : "Shadar-kai",
	source : ["DAPC", 6],
	plural : "Shadar-kai",
	improvements : "Shadar-kai: +2 Dexterity, +1 Intelligence;",
	scores : [0, 2, 0, 1, 0, 0],
	age: "The Shadar-kai reach physical maturity at the same rate as humans, but we generally live far longer. A shadar-kai may live up to 800 years.",
	size : 3, 
	speed : [30, 20],
	vision : "Superior Darkvision 120 ft",
	languages : ["Common", "+1 from Shadar-kai"],
	skills : ["Intimidation"],
	trait : "Shadar-kai (+2 Dexterity, +1 Intelligence)"\nDoomspeaker: I gain proficiency in the Intimidation skill.",
	features : {
		"shadow jaunt" : {
			name : "Shadow Jaunt",
			minlevel : 1,
			tooltip : " (Shadow Jaunt)",
			action : "bonus action", ""],
			description : "On my turn, when I reduce a creature to 0 hit points, I can use my bonus action to teleport up to 15 feet.",
			}
		}
	}
};
UpdateDropdown("race");
			}
		}
	}
};
ClassSubList["path of blood"] = {
		regExpSearch : /pathofblood/i,
		subname : "Path of Blood",
		source : ["DAPC", 8],
		features : { 
			"subclassfeature3" : {
				name : "Bloodbound",
				source : ["DAPC", 8],
				minlevel : 3, 
				description : "\n   " + "Starting when I select this path at 3rd level, I can choose to create a bond of blood between myself and an enemy within 30 feet of me when I rage." + "\n   " + "For the duration of my rage, that enemy’s attacks deal bonus necrotic damage to me equal to 1d4 + half my barbarian level on a hit, and my attacks against that enemy also deal 1d4 + half my barbarian level bonus necrotic damage on a hit. The bonus damage dealt to me ignores resistance and immunity." + "\n   " + "If the enemy dies before my rage ends, I can use my bonus action on a subsequent turn to create a new bond between myself and another enemy.",
			},
			"subclassfeature6" : {
				name : "Power Through Suffering",
				source : ["DAPC", 8],
				minlevel : 6, 
				description : "\n   " + "At 6th level, the sight of my own blood empowers my rage. When I am below half my hit point maximum, my rage damage bonus is doubled for each attack I make against the target of my Bloodbound feature.",
			},
			"subclassfeature10" : {
				name : "Blood Scent",
				source : ["DAPC", 8],
				minlevel : 10,
				description : "\n   " + "Starting at 10th level, I can smell the scent of blood from up to 5 miles away, and accurately pinpoint the direction it’s coming from." + "\n   " + "Once I get within 1 mile of the source, I can make a DC 15 Wisdom (Perception) check to determine its exact identity." + "\n      " + "On a success, I know the exact identity of the creature if I have encountered it before; otherwise I only determine its type and the severity of its injury." + "\n      " + "On a failed check, I know that I failed the check and can’t make another one for 1 hour." + "\n      " + "Either way on a success, I know the exact distance and direction to the injured enemy.",
				//The extra spaces later on are to format the save as something similar to an outline. Would this be how to do it?
			},
			"subclassfeature14", : {
				name : "Blood Reckoning",
				source : ["DAPC", 8],
				minlevel : 14, 
				description : "\n   " + "Beginning at 14th level, when a creature within 5 feet of me hits me with a melee attack, the attacker takes necrotic damage equal to one fourth of my Barbarian level.",
			},	
		}
	}
ClassList.barbarian.subclasses[1].push("pathofblood");

ClassSubList["college of the shadowfell"] = {
		regExpSearch : / collegeoftheshadowfell/i,
		subname : "College of the Shadowfell",
		source : ["DAPC", 9],
		features : {
			"subclassfeature3" : {
				name : "Bonus Proficiencies",
				source : ["DAPC", 9],
				minlevel : 3,
				description : "\n   " + "When I select this College at 3rd level, I gain proficiency with medium armor, martial weapons, and the Stealth skill.",
					armor : [false, true, false, false],
					weapons : [false, true],
					skills : ["Stealth"],
					skillstxt : "\n\n" + toUni("College of the Shadowfell") + ": Stealth.",
			},
			"subclassfeature3.1" : {
				name : "Shadow Stride",
				source : ["DAPC", 9],
				minlevel : 3,
				description : "\n   " +  "When a creature that is in darkness or dim light and has a bardic inspiration die from me begins to move, it can choose to roll that die and add 5 times the number rolled to their speed until the end of their turn.",
			},
			"subclassfeature6" : {
				name : "Shroud of Darkness",
				source : ["DAPC", 9],
				minlevel : 6,
				description : "\n   " + "Whenever a creature uses a bardic inspiration die from me, that creature becomes imbued with shadow magic." + "\n   " + "Shadows envelop that creature until the start of my next turn, causing all attacks against it to have disadvantage and allowing it to disengage or hide as a bonus action for the duration.",
			},
			"subclassfeature14: : {
				name : "Umbral Body",
				source : ["DAPC", 9],
				minlevel : 14, 
				description : "\n   " + "I can cast Umbral Form at will, without expending a spell slot or material components. When I cast the spell using this feature, I may only target myself.",
					source : ["DAPC", 29],
					spellcastingbonus : {
						name : "Umbral Body",
						//class unknown so far.
						school : ["Trans"],
						spells : ["Umbral Form"],
						selection : ["Umbral Form"],
						atwill : true,
						//I haven't defined the spell yet, but is this how I add it in for something this class can cast at will?
			},	
		}
	}
ClassList.bard.subclasses[1].push("collegeoftheshadowfell");

ClassSubList["night domain"] = {
		regExpSearch : / nightdomain/i,
		subname : "Night Domain",
		source : ["DAPC", 10],
		spellcastingExtra : ["sleep", "aura of shade", "darkness", "moonbeam", "fear", "feign death", "greater invisibility", "rend shadows", "dream", "shadow stride"],
		features : {
			"subclassfeature1" : {
				name : "Bonus Proficiencies",
				source : ["DAPC", 10],
				minlevel : 1, 
				description :  "\n   " + "When I select this Domain at 1st level, I gain proficiency with martial weapons and the Stealth skill.",
				weapons : [false, true],
				skills : ["Stealth"],
				skillstxt : "\n\n" + toUni("Night Domain") + ": Stealth.",
			},
			"subclassfeature1.1" : {
				name : "Lunar Radiance",
				source : ["DAPC", 10],
				minlevel : 1, 
				description :  "\n   " + "When I hit a creature with a melee weapon attack, I can force them to become basked in moonlight." + "\n   " + "The next attack roll made against this target before the end of my next turn has advantage, and deals an additional 1d6 radiant damage on a hit." + "\n   " + "I can use this feature a number of times equal to my Wisdom modifier (a minimum of once). I regain all expended uses when I finish a long rest.",
					//Do I need to add anything that says the next attack gets advantage?
				usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
				additional : ["1d6 damage"],
				recovery : "long rest",
				calcChanges : {
					atkAdd : ["if (isMeleeWeapon) {fields.Description += (fields.Description ? '; ' : '') + '+1d6 Radiant damage'; }; ", "With my melee weapon attacks I deal an extra 1d6 radiant damage."]
				}
			},
			"subclassfeature2" : {
				name : "Channel Divinity: Midnight Gloom",
				source : ["DAPC", 10],
				minlevel : 2,
				description :  "\n   " + "As an action, in 30 ft all lights, magical or non-magical, are instantly put out. and hostiles must make a Con save" + "\n   " + "Each takes necrotic damage and loses any darkvision they have for 1 min, saves for half and do not lose darkvision" + "\n   " + "A creature can repeat this saving throw at the start of each of its turns, regaining their darkvision on a success.",
				additional : ["", "2d6 + 2 damage", "2d6 + 3 damage", "2d6 + 4 damage", "2d6 + 5 damage", "2d6 + 6 damage", "2d6 + 7 damage", "2d6 + 8 damage", "2d6 + 9 damage", "2d6 + 10 dmg", "2d6 + 11 dmg", "2d6 + 12 dmg", "2d6 + 13 dmg", "2d6 + 14 dmg", "2d6 + 15 dmg", "2d6 + 16 dmg", "2d6 + 17 dmg", "2d6 + 18 dmg", "2d6 + 19 dmg", "2d6 + 20 dmg"],
				//How do I mark this as Necrotic damage? I copied from the Light Domain ability, but it didn't say anything. 
				action : ["action", ""],
			},
			"subclassfeature6" : {
				name : "Moonlight Strike",
				source : ["DAPC", 10],
				minlevel : 6,
				description : "\n   " + "When I deal radiant damage to a creature, I may choose to have it emit dim light in a 10 foot radius until the end of my next turn." + "\n      " + "The affected creature can’t benefit from being invisible." + "\n      " + "If the creature is a shapeshifter it immediately shifts to its original form and can’t assume a different form until the light dissipates.",
			},
			"subclassfeature8" : {
				name : "Divine Strike",
				source : ["DAPC", 10],
				minlevel : 8,
				description : "\n   " + "Once on each of my turns when I hit a creature with a weapon attack, I can cause the attack to deal an extra 1d8 radiant damage to the target." + "\n   " + "When I reach 14th level, the extra damage increases to 2d8."
				additional : ["", "", "", "", "", "", "", "1d8 damage", "", "", "", "", "", "2d8 damage", "", "", "", "", "", ""],
			},
			"subclassfeature17" : {
				name : "Nightstalker",
				source : ["DAPC", 10],
				minlevel : 17,
				description : "\n   " + "When I am in an area of dim light or darkness, I can use my action to become invisible." + "\n   " + "I remain invisible until I make an attack, cast a spell, or are in an area of bright light.",
				action : ["action", ""],
				//Do I need to add the spellcastingbonus syntax to this section? Or no becuase a spell isn't being cast?
			},
		},
	},
ClassList.cleric.subclasses[1].push("nightdomain");

ClassSubList["circleoftwilight"] = {
	regExpSearch : / circleoftwilight/i,
	subname : "Circle of Twilight",
	source : ["DAPC", 11],
	spellcastingExtra : 
	features : {
		"subclassfeature2" : {
			name : "Ritual Sacrifice",
			source : ["DAPC", 11],
			minlevel : 2,
			description : "'\n   " + "By using the body of a creature that has died within the last hour as one of my spell components, I can cast any spell with the ritual tag from any class spell list without needing to prepare it. I still need to use the other components of the ritual as normal." + "\n   " + "In order to cast a ritual in this manner, I need the body of a creature of a CR greater than or equal to the spell level of the ritual to be cast, and the spell must be of a level I have spell slots for. The creature used cannot be a construct, an undead, or an elemental. " + "\n   " + "Once I complete the ritual, that creature cannot be used in any other rituals.",
		},
		"subclassfeature3" : {
			name : "Circle Spells",
			source : ["DAPC", 11],
			minlevel : 3,
			description : "\n   " + "The dark powers of twilight infuse me with the ability to cast certain spells.",
			"twilight" : {
				name : "Twilight Circle Spells",
				spellcastingExtra : ["darkness", "gentle repose", "speak with dead", "tides of blood", "dominate beast", "draining thread", "dominate person", "insect plague"],
				eval : "if (event.target.name === \"Class Features Menu\") {app.alert({cMsg: \"You just changed the spells that should appear on the spell sheet. Please use the 'Spells' button or bookmark generate a new spell sheet so that these changes can be incorporated\", cTitle: \"Circle Spells need to be added to the Spell Sheet(s)\", nIcon : 3, nType : 0})};",
		},
		"subclassfeature6" :{
			name : "Eyes of Twilight",
			source : ["DAPC", 11],
			minlevel : 6,
			description : "\n   " + "I gain darkvision with a radius of 60 feet, or I increase the radius of my darkvision by 30 feet if I already have it." + "\n  " + "Additionally, I can see through magical darkness for the radius of my darkvision.",
				//Is there a script to add/improve darkvision through a subclass feature, not as a spell?
		},
		"subclassfeature10" : {
			name : "Soulseeing",
			source : ["DAPC", 11],
			minlevel : 10,
			description : "\n   " + "As an action on my turn, I hone my senses to allow me to see the faint outline of any living creature or creature that has died within the last hour." + "\n   " + "This allows me to see any creature within the radius of my darkvision, including invisible creatures, as well as creatures that are obscured in some manner, such as being behind a wall or in murky water." "\n   " + "This sight can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt. The magical sight lasts until the end of my next turn." + "\n  " + "I can use this feature a number of times equal to my Wisdom modifier (a minimum of once). I regain all expended uses when I finish a long rest.",
			action : ["action", ""],
			usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Wis Mod\").value);",
			recovery : "long rest",
		},
		subclassfeature14" : {
			name : "Ritualist",
			source : ["DAPC", 11],
			minlevel : 14,
			description : "\n   " + "I become a master at performing rituals. Casting a spell as a ritual now only adds 1 minute to the cast time." + "\n   " + "Additionally, when I cast a ritual using my ritual sacrifice feature, the CR of the creature only needs to be half of the spell level of the ritual to be cast, and I may use the same creature in up to 2 different rituals.",
		},
	},
},
ClassList.druid.subclasses[1].push("circleoftwilight");

ClassSubList["bloodknight"] = {
	regExpSearch : / bloodknight/i,
	subname : "Blood Knight",
	source : ["DAPC", 12],
	abilitySave : 3, //constitution?
	spellcastingList : {
		//class : "unknown",
		school : ["Hemo"], //Might need to make a seperate tag for Hemomancy spells.
		level : [0, 4],
		ritual : false, 
	},
	//need help making spellcasting table.
	spellcastingKnown : {
		cantrips : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		spells : [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4],
	},
	features : {
		"subclassfeature3.1" : {
			name : "Blood Well",
			source : ["DAPC", 12],
			minlevel : 3,
			description : "\n   " + "I gain a number of blood dice to fuel my blood magic" + "\n   " + " I regain all of my expended blood dice when I finish a short or long rest.",
			recovery : "short rest",
			additional : ["", "", "d4", "d4", "d4", "d4", "d4", "d4", "d4", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6", "d6"],
			usages : [ 0, 0, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6],
			//How do I translate the Using Blood Dice section into its reqired actions?
		},
		"subclassfeature7" : {
			name : "Deathseeker",
			source : ["DAPC", 12],
			minlevel : 7, 
			description : "\n   " + "I gain advantage on any Wisdom (Perception or Survival) check used to find a wounded creature." + "\n   " + "Additionally, as a bonus action on my turn I can sacrifice 1 hit point to learn the general direction of every creature within 100 feet of me that has blood.",
			action : ["bonus action", ""],
		},
		"subclassfeature10" : {
			name : "Improved Blood Well",
			source : ["DAPC", 12],
			minlevel : 10,
			description : "\n   " + "My blood dice turn into d6s.",
		}
		"subclassfeature15" : { 
			name : "Blood Rush",
			source : ["DAPC", 12],
			minlevel : 15,
			description : "\n   " + "Whenever I cast a hemomancy spell of 1st level or higher, I enter a blood rush. The blood rush lasts until the end of my next turn." + "\n   " + "For the duration my speed is doubled, I have advantage on Dexterity saving throws, and I can disengage as a bonus ation.",
			action : ["bonus action", ""],
			//Do I need to list this as a bonus action ability?
		},
		"subclassfeature18" : {
			name : "Strength of the Wounded",
			source : ["DAPC", 12],
			minlevel : 18,
			description : "\n   " + "Whenever I expend a blood die while below half my hit point maximum, I can add my Constitution modifier to the result.",
			//Do I need to use calcChanges for this?
		},
	},
},
ClassList.fighter.subclasses[1].push("bloodknight");

ClassSubList["wayofthebloodiedfist"] = {
	regExpSearch : / wayofthebloodiedfist/i,
	subname : "Way of the Bloodied Fist",
	source : ["DAPC", 13],
	features : {
		"subclassfeature3" :{ //Is this how I add the spells to this Monastic Tradition? I based it on the Way of the Four Elements.
			name : "Sanguine Arts",
			source : ["DAPC", 13],
			minlevel : 3,
			description : "\n   " + "I can use my ki to duplicate the effects of certain spells." + "\n   " + "As an action, I can spend 2 ki points to cast bloodburn, blood seal, or vampire’s kiss at their lowest level without providing material components. Additionally, I gain the bloodletting cantrip if I don’t already know it." + "\n   " + "I must still pay the hemomancy costs associated with each spell.",
			extraname : "Sanguine Arts",
			extrachoices : ["Bloodburn", "Blood Seal", "Vampire's Kiss", "Bloodletting"]
			eval : "ClassFeatureOptions([\"monk\", \"subclassfeature3\", \"sanguine arts\", \"extra\"]);",
			removeeval : "ClassFeatureOptions([\"monk\", \"subclassfeature3\", \"sanguine arts\", \"extra\"], \"remove\");",
			action : ["action", ""]
		},
		"bloodburn (prereq: level 3 monk)" : {
			name : "Bloodburn",
			source : ["DAPC", 24],
			description : " [2 ki points]" + "\n   " + "As an action, I can cast Bloodburn without material components at its lowest level (DAPC 24).",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Bloodburn",
				spells : ["bloodburn"],
				selection : ["bloodburn"],
				firstCol : 2
				},
					spellFirstColTitle : "Ki",
					prereqeval : "classes.known.monk.level >= 3"
				},
		},
		"blood seal (prereq: level 3 monk)" : {
			name : "Blood Seal",
			source : ["DAPC", 25],
			description : " [2 ki points]" + "\n   " + "As an action, I can cast Blood Seal without material components at its lowest level (DAPC 25).",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Blood Seal",
				spells : ["blood seal"],
				selection : ["blood seal"],
				firstCol : 2
				},
					spellFirstColTitle : "Ki",
					prereqeval : "classes.known.monk.level >= 3"
				},
		},
		"vampire’s kiss (prereq: level 3 monk)" : {
			name : "Vampire's Kiss",
			source : ["DAPC", 29],
			description : " [2 ki points]" + "\n   " + "As an action, I can cast Vampire's Kiss without material components at its lowest level (DAPC 29).",
			action : ["action", ""],
			spellcastingBonus : {
				name : "Vampire's Kiss",
				spells : ["vampire’s kiss"],
				selection : ["vampire’s kiss"],
				firstCol : 2
				},
					spellFirstColTitle : "Ki",
					prereqeval : "classes.known.monk.level >= 3"
				},
		},
		"subclassfeature6" :{
			name : "Toll of the Mystic",
			source : ["DAPC", 13],
			minlevel : 6,
			description : "\n   " + "Whenever I spend my ki points, I can choose to expend a number of hit points equal to the number of ki points expended." + "\n   " + "If I do so, until the start of my next turn I gain a bonus to my speed equal to x10 the number of hit points expended.",
			//eval : "ChangeSpeed(10);",
			//removeeval : "ChangeSpeed(-10);"
			//This increases the speed by +10, how to I change it to x10 depending on how much hp is spent?
			action : ["action", ""],
			//Would this be an action option?
		},
		"subclassfeature11" : {
			name : "Transfusion",
			source : ["DAPC", 13],
			minlevel : 11,
			description : "\n   " + "Whenever I hit a creature with one of the attacks granted by my Flurry of Blows while I'm below half my hit point maximum, I regain 1d4 hit points." + "\n   " + "If the attack scores a critical hit, I instead regain 2d4 hit points.",
		},
		"subclassfeature17" : {
			name : "Dominion of Blood",
			source : ["DAPC", 13],
			minlevel : 17,
			description : "\n   " + "When I hit a creature with an unarmed strike, I can spend 3 ki points to attempt to grasp control over that creature. The creature must succeed on a Constitution saving throw or fall under my control." + "\n   " + "On every subsequent turn after assuming control, I must use my action to take total and precise control of the target." + "\n   " + "Until the end of my next turn, the creature takes only the actions I choose, and doesn't do anything that I don't allow it to do. During this time, I can also cause the creature to use a reaction, but this requires me to use my own reaction as well." + "\n   " + "If I don't take this action at the start of my turn, the control ends prematurely. This control can last for up to 1 minute." + "\n   " + "Each time the target takes damage, it makes a new Constitution saving throw against the effect. If the saving throw succeeds, the effect ends.",
			action : ["action", ""],
			//Would this be an action option?
			firstCol : 3
				},
					spellFirstColTitle : "Ki",
					prereqeval : "classes.known.monk.level >= 17"
				},
		},
	},
},
ClassList.monk.subclasses[1].push("wayofthebloodiedfist");
