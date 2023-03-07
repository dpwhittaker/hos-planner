//level 0,1,&2 are always 0
var attvkk = [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3];
var attkf = [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3];
var attts = [0, 0, 0, 2, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 3];
var attv = [0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 2];

var sklvkk = [0, 0, 0, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2];
var sklts = [0, 0, 0, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2];
var sklv = [0, 0, 0, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 2, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 2];
var sklkf = [0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 3];

var talvkk = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 2];
var talkf = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 2];
var talv = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 2];
var talts = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 3];

const HoSData = {
	Warrior: {
		Vraes: {
			title: "Outlander",
			levels: {
				att: attvkk,
				skl: sklvkk,
				tal: talvkk
			},
			base: {
				HP: 172,
				SP: 70,
				att: { Strength: 7, Dexterity: 4, Constitution: 6, Willpower: 5, Intelligence: 3, Knowledge: 3 },
				skl: { Blades: 3, Hammers: 3, Polearms: 3, Leadership: 1, Lore: 2 },
				tal: { "Crushing Blow": 1, "Stone Skin": 1, "Savage Sweep": 1, "Phalanx Shield": 0, "Natural Mastery": 0, "Burst of Speed": 0, "Ferocity": 0, "Berserk Rage": 0, "Juggernaut": 0 }
			},
			factor: {
				HP: { Constitution: 26, Level: 16 },
				SP: { Intelligence: 22, Level: 4 },
				Toughness: { Constitution: 1.25 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 1 }
			},
			talents: {
				"Crushing Blow": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 0, 0, 1, 2, 2, 3, 3, 4, 4, 5],
						Damage: [0, 8, 16, 24, 32, 40, 48, 56, 66, 78, 90]
					},
					factor: {}
				},
				"Stone Skin": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						HP: [0, 20, 36, 80, 120, 150, 180, 230, 280, 330, 380],
						Armor: [0, 2, 5, 8, 12, 16, 20, 24, 30, 36, 42],
						"Earth Resist": [0, 0, 2, 4, 6, 8, 12, 16, 20, 24, 30]
					},
					info: {
						turns: 8
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Savage Sweep": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 5, 6, 7, 8, 9, 11, 12, 14, 15],
						Damage: [0, 0, 4, 10, 16, 18, 20, 22, 24, 26, 34]
					},
					factor: {}
				},
				"Phalanx Shield": {
					type: "Self Buff",
					turns: 6,
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					self: {
						Parry: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Armor: [0, 0, 2, 4, 6, 8, 10, 13, 16, 19, 22],
						"Block Ranged %": [0, 18, 21, 24, 27, 30, 33, 37, 41, 46, 52]
					},
					info: {
						turns: 6
					},
					factor: {
						turns: { Leadership: 1 }
					}
				},
				"Natural Mastery": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						Accuracy: [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5],
						"Melee Skills": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
						"Strength (dmg)": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
					},
					info: {
						turns: 8,
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Burst of Speed": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 1,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					self: {
						MP: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
						Parry: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3],
						Dodge: [0, 1, 2, 3, 4, 5, 6, 6, 7, 8, 9]
					},
					info: {
						turns: 3
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Ferocity": {
					type: "Melee Attack",
					level: 6,
					cost: {
						AP: "W",
						SP: [0, 16, 22, 28, 36, 44, 54, 64, 76, 88, 100]
					},
					attack: {
						Accuracy: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						Damage: [0, 32, 48, 64, 80, 96, 112, 128, 144, 166, 200],
						"Crit Dmg %": [0, 4, 6, 8, 12, 16, 20, 26, 32, 50, 70]
					},
					factor: {}
				},
				"Berserk Rage": {
					type: "Self Buff",
					level: 12,
					cost: {
						AP: 4,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64],
						Parry: [0, 1, 2, 3, 3, 4, 4, 5, 5, 6, 6],
						Armor: [0, 3, 6, 12, 16, 20, 24, 28, 34, 34, 34]
					},
					self: {
						Damage: [0, 8, 11, 14, 17, 20, 24, 28, 32, 38, 46],
						"Critical %": [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 33],
						"Crit Dmg %": [0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50]
					},
					info: {
						turns: 8
					},
					factor: {
						turns: { Leadership: 1 }
					}
				},
				"Juggernaut": {
					type: "Melee Attack",
					level: 12,
					cost: {
						AP: "W",
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					attack: {
						Damage: [0, 8, 14, 20, 26, 32, 38, 46, 52, 58, 66],
						Accuracy: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
						"AP on kill": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2],
						"MP on kill": [0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2],
						"SP on kill": [0, 3, 6, 9, 12, 15, 18, 21, 24, 28, 32]
					},
					factor: {}
				}
			}
		},
		Kincaid: {
			title: "Duelist",
			levels: {
				att: attvkk,
				skl: sklvkk,
				tal: talvkk
			},
			base: {
				HP: 133,
				SP: 80,
				att: { Strength: 5, Dexterity: 7, Constitution: 5, Willpower: 3, Intelligence: 4, Knowledge: 4 },
				skl: { Blades: 4, Thrown: 2, Leadership: 2, Lore: 2, Stealth: 2 },
				tal: { "Lunge": 1, "Sure Parry": 1, "Darting Steel": 1, "Crippling Strikes": 0, "Cunning Footwork": 0, "Flashing Blades": 0, "Live by the Blade": 0, "Flanking Unity": 0, "Storm of Steel": 0 }
			},
			factor: {
				HP: { Constitution: 25, Level: 13 },
				SP: { Intelligence: 18, Level: 8 },
				Toughness: { Constitution: 1 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 1 }
			},
			talents: {
				"Lunge": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 5, 6, 7, 8, 9, 11, 12, 14, 15],
						Damage: [0, 4, 6, 12, 18, 20, 22, 24, 26, 28, 36]
					},
					factor: {}
				},
				"Sure Parry": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 1,
						SP: [0, 4, 6, 8, 10, 13, 16, 20, 24, 28, 32]
					},
					self: {
						Parry: [0, 0, 1, 2, 2, 3, 4, 4, 5, 5, 6],
						Dodge: [0, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6],
						Armor: [0, 0, 0, 0, 0, 0, 2, 2, 5, 8, 12],
						"Auto block hits": [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3]
					},
					info: {
						turns: 3
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Darting Steel": {
					type: "Curse Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 9, 10, 12, 14, 16],
						Damage: [0, 3, 6, 9, 12, 15, 18, 22, 26, 30, 36]
					},
					curse: {
						Parry: [0, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13],
						Dodge: [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11]
					},
					info: {
						range: "W",
						turns: 3,
						AoE: [0, 1, 1, 1, 1, 3, 3, 3, 3, 4, 4]
					},
					factor: {}
				},
				"Crippling Strikes": {
					type: "Curse Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 4, 6, 8, 10, 13, 16, 20, 24, 28, 32]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Damage: [0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
					},
					curse: {
						AP: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
						Damage: [0, 8, 12, 16, 20, 26, 32, 38, 46, 56, 66],
						Dodge: [0, 1, 2, 3, 4, 4, 4, 5, 5, 6, 7]
					},
					info: {
						turns: 3,
						AoE: [0, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5]
					},
					factor: {}
				},
				"Cunning Footwork": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						Accuracy: [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6],
						"Critical %": [0, 3, 4, 5, 7, 9, 10, 11, 12, 14, 16],
						Parry: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6],
						Dodge: [0, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9]
					},
					info: {
						turns: 8
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Flashing Blades": {
					type: "Buff Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Damage: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
					},
					self: {
						Accuracy: [0, 2, 3, 4, 5, 7, 8, 9, 10, 11, 13],
						"Critical %": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12]
					},
					info: {
						turns: 3
					},
					factor: {}
				},
				"Live by the Blade": {
					type: "Self Buff",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					self: {
						MP: [0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
						Armor: [0, 2, 4, 6, 9, 12, 15, 18, 22, 26, 32]
					},
					info: {
						turns: 6
					},
					factor: {
						turns: { Leadership: 1 }
					}
				},
				"Flanking Unity": {
					type: "Buff",
					level: 12,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					buff: {
						Accuracy: [0, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9],
						Damage: [0, 2, 2, 4, 4, 8, 8, 12, 16, 20, 24]
					},
					info: {
						range: 1,
						turns: 3,
						targets: 1,
						AoE: [0, 5, 5, 5, 5, 9, 9, 9, 9, 13, 13]
					},
					factor: {
						turns: { Leadership: 1 },
						targets: { Leadership: 1 }
					}
				},
				"Storm of Steel": {
					type: "Melee Attack",
					level: 18,
					cost: {
						AP: "W",
						SP: [0, 12, 20, 28, 36, 44, 52, 60, 68, 76, 86]
					},
					attack: {
						Accuracy: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14],
						Damage: [0, 8, 12, 18, 24, 28, 32, 38, 44, 50, 56]
					},
					info: {
						AoE: [0, 5, 5, 5, 5, 5, 5, 5, 9, 9, 9]
					},
					factor: {}
				}
			}
		}
	},
	Mystic: {
		Kjartan: {
			title: "Wizard",
			levels: {
				att: attkf,
				skl: sklkf,
				tal: talkf
			},
			base: {
				att: { Strength: 3, Dexterity: 4, Constitution: 4, Willpower: 7, Intelligence: 6, Knowledge: 4 },
				skl: { Polearms: 2, Sorcery: 4, Conjuring: 2, Lore: 2 },
				tal: { Firebolt: 1, "Choking Ash": 1, "Pureflame Shield": 1, "Burning Blades": 0, "Warding Words": 0, "Spirit Sight": 0, Immolation: 0, "Meteoric Shockwave": 0, Firestorm: 0 }
			},
			factor: {
				HP: { Constitution: 16, Level: 8 },
				SP: { Intelligence: 26, Level: 11 },
				Toughness: { Constitution: 0.5 },
				Dodge: { Dexterity: 1 },
				Resistance: { Willpower: 2 }
			},
			talents: {
				Firebolt: {
					type: "Spell Attack",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 4, 6, 8, 10, 13, 16, 20, 24, 28, 32]
					},
					attack: {
						Damage: [0, 11, 15, 24, 26, 34, 50, 66, 76, 88, 100],
						"Fire Damage": [0, 7, 8, 20, 38, 44, 50, 50, 58, 88, 120],
						Accuracy: [0, 4, 6, 7, 8, 9, 11, 13, 15, 16, 18]
					},
					info: {
						range: 6
					},
					factor: {}
				},
				"Choking Ash": {
					type: "Curse",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 4, 6, 8, 10, 13, 16, 20, 24, 28, 32]
					},
					info: {
						range: 6,
						turns: 8,
						targets: 0,
						AoE: [0, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9]
					},
					curse: {
						Parry: [0, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9],
						Dodge: [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						Armor: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 26]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Pureflame Shield": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					buff: {
						Armor: [0, 2, 4, 6, 8, 10, 12, 14, 18, 22, 28],
						"Elemental Resist": [0, 3, 6, 9, 12, 15, 18, 21, 26, 31, 38]
					},
					info: {
						range: 6,
						turns: 3,
						turns: 1,
						AoE: [0, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Burning Blades": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					buff: {
						"Fire Damage": [0, 3, 6, 9, 13, 16, 19, 22, 25, 29, 36],
						"Critical %": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]
					},
					info: {
						range: 3,
						turns: 8,
						targets: 1,
						AoE: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Warding Words": {
					type: "Lockpick",
					level: 0,
					cost: {
						AP: [0, 4, 4, 3, 3, 3, 2, 2, 2, 2, 1],
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					security: {
						Lore: [0, 2, 4, 4, 5, 6, 7, 7, 8, 9, 10]
					},
					info: {
						range: [0, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6]
					},
					factor: {}
				},
				"Spirit Sight": {
					type: "Scan",
					level: 0,
					cost: {
						AP: [0, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1],
						SP: [0, 4, 6, 8, 10, 13, 16, 20, 24, 28, 32]
					},
					security: {
						"Reveal Area": [0, "small", "medium", "medium", "large", "large", "large", "immense", "immense", "giant", "giant"],
						"Surprise AP": 1
					},
					info: {
						range: [0, 6, 7, 7, 8, 8, 8, 9, 9, 10, 12]
					},
					factor: {}
				},
				Immolation: {
					type: "Cursing Attack",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					attack: {
						Damage: [0, 6, 12, 22, 28, 35, 44, 52, 60, 70, 75],
						"Fire Damage": [0, 16, 24, 30, 36, 42, 48, 56, 66, 76, 86],
						Accuracy: [0, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15]
					},
					curse: {
						"Crit Vuln %": [0, 1, 2, 4, 6, 8, 10, 12, 13, 14, 16],
						Armor: [0, 0, 0, 0, 0, 0, 0, 2, 4, 6, 8]
					},
					info: {
						range: 6,
						turns: 3,
						targets: 0,
						AoE: 9
					},
					factor: { targets: { Sorcery: 1 } }
				},
				"Meteoric Shockwave": {
					type: "Curse",
					level: 12,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					info: {
						range: [0, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
						turns: 8,
						AoE: [0, 1, 5, 5, 5, 5, 9, 9, 9, 9, 9]
					},
					curse: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						Damage: [0, 8, 12, 16, 20, 26, 32, 38, 46, 56, 66]
					},
					factor: { turns: { Conjuring: 1 } }
				},
				Firestorm: {
					type: "Spell Attack",
					range: [0, 6, 6, 7, 7, 8, 9, 9, 9, 9, 9],
					level: 18,
					cost: {
						AP: 4,
						SP: [0, 16, 25, 35, 43, 52, 61, 70, 79, 88, 102]
					},
					attack: {
						Damage: [0, 24, 30, 36, 42, 50, 58, 64, 72, 82, 92],
						"Fire Damage": [0, 42, 50, 60, 86, 88, 88, 100, 100, 100, 100],
						Accuracy: [0, 12, 13, 14, 15, 16, 17, 18, 18, 19, 20]
					},
					info: {
						AoE: [0, 13, 13, 13, 13, 25, 25, 25, 25, 25, 25]
					},
					factor: { targets: { Sorcery: 1 } }
				}
			}
		},
		Vincent: {
			title: "Sorcerer",
			levels: {
				att: attv,
				skl: sklv,
				tal: talv
			},
			base: {
				att: { Strength: 4, Dexterity: 4, Constitution: 4, Willpower: 4, Intelligence: 6, Knowledge: 6 },
				skl: { Blades: 3, Polearms: 1, Sorcery: 3, Conjuring: 3, Lore: 2 },
				tal: { "Storm Strike": 1, "Lightning Spear": 1, "Frigid Air": 1, "Flash Freeze": 0, "Charged Speed": 0, "Energy Storm": 0, "Thundering Blades": 0, "Eye of the Storm": 0, "Elemental Sundering": 0 }
			},
			factor: {
				HP: { Constitution: 22, Level: 11 },
				SP: { Intelligence: 22, Level: 8 },
				Toughness: { Constitution: 1 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 2 }
			},
			talents: {
				"Storm Strike": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 6, 7, 7, 8, 9, 10],
						"Lightning Damage": [0, 4, 8, 12, 16, 20, 24, 32, 36, 42, 50],
					},
					factor: {}
				},
				"Lightning Spear": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Damage: [0, 10, 12, 16, 22, 32, 38, 44, 50, 56, 62],
						"Lightning Damage": [0, 8, 11, 14, 20, 22, 30, 30, 38, 50, 72],
						Accuracy: [0, 4, 6, 7, 8, 9, 10, 11, 12, 13, 15]
					},
					info: {
						AoE: [0, 4, 4, 4, 4, 6, 6, 6, 6, 6, 10],
						targets: 0
					},
					factor: {
						targets: { Sorcery: 1 }
					}
				},
				"Frigid Air": {
					type: "Curse",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					curse: {
						"Ranged Accuracy": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Damage: [0, 8, 12, 16, 20, 26, 32, 38, 46, 56, 72]
					},
					info: {
						AoE: [0, 5, 5, 9, 9, 9, 13, 13, 13, 13, 13],
						turns: 8,
						targets: 0
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Flash Freeze": {
					type: "Curse",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					curse: {
						AP: [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
						Dodge: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]
					},
					info: {
						AoE: [0, 1, 5, 5, 5, 9, 9, 9, 9, 9, 13],
						range: [0, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
						turns: 8,
						targets: 0
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Charged Speed": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 1,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					self: {
						MP: [0, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
						Dodge: [0, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						"Lightning Resist": [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 24]
					},
					info: {
						turns: 3
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Energy Storm": {
					type: "Cursing Spell Attack",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					attack: {
						Damage: [0, 10, 16, 24, 30, 38, 44, 60, 72, 76, 84],
						"Lightning Damage": [0, 10, 14, 24, 26, 32, 40, 42, 44, 52, 62],
						Accuracy: [0, 6, 7, 8, 9, 10, 11, 12, 13, 13, 13]
					},
					curse: {
						"Lightning Resist": [0, 3, 5, 8, 10, 13, 15, 18, 21, 24, 28]
					},
					info: {
						range: 4,
						turns: 3,
						targets: 0
					},
					factor: {
						targets: { Sorcery: 1 }
					}
				},
				"Thundering Blades": {
					type: "Buff",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					buff: {
						Accuracy: [0, 1, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						"Lightning Damage": [0, 3, 6, 9, 13, 16, 19, 22, 25, 29, 36]
					},
					info: {
						turns: 8,
						range: 6,
						targets: 1,
						AoE: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Eye of the Storm": {
					type: "Self Buff",
					level: 12,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14],
						"Critical %": [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
					},
					info: {
						turns: 3
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Elemental Sundering": {
					type: "Buff Attack",
					level: 18,
					cost: {
						AP: "W",
						SP: [0, 8, 16, 25, 35, 43, 52, 61, 70, 79, 88]
					},
					attack: {
						Accuracy: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15],
						"Elemental Damage": [0, 8, 12, 14, 16, 18, 20, 22, 24, 30, 36]
					},
					self: {
						Parry: [0, 4, 5, 6, 7, 7, 8, 8, 9, 10, 10],
						Dodge: [0, 4, 5, 6, 7, 8, 8, 9, 9, 9, 9],
						"SP Drain %": [0, 3, 4, 5, 6, 7, 8, 9, 10]
					},
					info: {
						turns: 3,
						AoE: [0, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9]
					},
					factor: {}
				}
			}
		}
	},
	Healer: {
		Syvana: {
			title: "Witch",
			levels: {
				att: attvkk,
				skl: sklvkk,
				tal: talvkk
			},
			base: {
				att: { Strength: 4, Dexterity: 3, Constitution: 4, Willpower: 5, Intelligence: 6, Knowledge: 6 },
				skl: { Polearms: 2, Sorcery: 3, Conjuring: 2, Lore: 2, Stealth: 2 },
				tal: { "Skewer": 1, "Bones of the Earth": 1, "Occult Calling": 1, "Malediction": 0, "Cabal of One": 0, "Blinding Strike": 0, "Quagmire": 0, "Leyline Gravity": 0, "Preternatural Speed": 0, "Lifeforce Regeneration": 0, "Edgescatter": 0 }
			},
			factor: {
				HP: { Constitution: 20, Level: 12 },
				SP: { Intelligence: 24, Level: 8 },
				Toughness: { Constitution: 1 },
				Dodge: { Dexterity: 1 },
				Resistance: { Willpower: 1.5 }
			},
			talents: {
				"Skewer": {
					type: "Empowered Melee/Thrown Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					attack: {
						"Earth Dmg": [0, 4, 12, 18, 26, 34, 46, 56, 66, 78, 90],
						"Critical %": [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
					},
					factor: {}
				},
				"Edgescatter": {
					type: "Cursing Melee/Thrown Spear Attack",
					level: 12,
					cost: {
						AP: "W",
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					curse: {
						"Ice Resist": [0, 2, 3, 4, 5, 6, 8, 12, 14, 16, 18],
						"Earth Resist": [0, 2, 3, 4, 5, 6, 8, 12, 14, 16, 18]
					},
					info: {
						AOE: [0, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6],
						turns: 3
					},
				},
				"Bones of the Earth": {
					type: "Heal",
					level: 0,
					cost: {
						AP: "3",
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					heal: {
						Heal: [0, 28, 56, 112, 160, 220, 280, 340, 420, 520, 700],
						Dispel: 1
					},
					info: {
						range: [0, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5]
					},
					factor: { Heal: { Lore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] } }
				},
				"Occult Calling": {
					type: "Self-Only Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					self: {
						"Spear Range": [0, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6],
						"Spear Accuracy": [0, 2, 3, 4, 5, 6, 7,8, 9, 10, 12],
						"Strength (dmg)": [0, 2, 2, 3, 3, 4, 4, 5, 5, 6],
						"Critical %": [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]
					},
					info: {
						turns: 3
					},
				},
				"Cabal of One": {
					type: "Self-Only Buff",
					level: 0,
					cost: {
						AP: [0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						"Earth Dmg": [0, 3, 4, 5, 7, 9, 12, 15, 18, 21, 24],
						"Armor": [0, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
						"SP Drain %": [0, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18]
					},
					info: {
						turns: 3
					},
					factor: { turns: { Lore: 1 } }
				},
				"Preternatural Speed": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 9, 14, 18, 23, 28, 33, 37, 42, 46]
					},
					buff: {
						Accuracy: [0, 1, 2, 3, 4, 4, 5, 5, 6, 7, 8],
						"Earth Dmg": [0, 4, 6, 9, 13, 16, 19, 22, 25, 29, 36],
						Dodge: [0, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15]
					},
					info: {
						turns: 3,
						range: 4,
						AOE: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9] }
					},
				},
				"Lifeforce Regeneration": {
					type: "Death-Curse",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					curse: {
						Aromr: [0, 1, 2, 3, 4, 6, 8, 10, 12, 14, 16],
						"Fire Resist": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
						"On-Death Heal": [0, 8, 16, 32, 48, 64, 78, 96, 120, 160, 200]
					},
					info: {
						turns: 3,
						range: [0, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7],
						AOE: [0, 1, 5, 5, 5, 9, 9, 9, 9, 9, 13],
						"Death Radius": [0, 1, 2, 2, 2, 3, 3, 4, 4, 4, 5]
					},
					factor: {
						turns: { Conjuring: 1 }
					}
				},
				"Leyline Gravity": {
					type: "Curse",
					level: 3,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					curse: {
						Parry: [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						Dodge: [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						Armor: [0, 2, 3, 4, 5, 7, 8, 9, 10, 12, 14],
						"Unholy Resist": [0, 0, 2, 3, 4, 5, 6, 8, 12, 14, 16],
						"Earth Resist": [0, 0, 2, 3, 4, 5, 6, 8, 12, 14, 16],
						"Ice Resist": [0, 0, 2, 3, 4, 5, 6, 8, 12, 14, 16]
					},
					info: {
						range: 4,
						turns: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
						AOE: [0, 1, 5, 5, 9, 9, 9, 9, 9, 9, 9],
						targets: [0, 1, 5, 5, 9, 9, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Sorcery: [0, 1, 5, 5, 9, 9, 9, 9, 9, 9, 9] }
					}
				},
				"Quagmire": {
					type: "Death Curse",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					curse: {
						AP: [0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2],
						Parry: [0, 1, 2, 3, 4, 4, 5, 6, 8, 10, 12],
						Dodge: [0, 1, 2, 3, 4, 4, 5, 6, 8, 10, 12],
						"On Death AP": [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
					},
					info: {
						range: [0, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7],
						"Death Radius": [0, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5],
						"Death Curse Turns": [0, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3],
						turns: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
						targets: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9] }
					},
				},
				"Blinding Strike": {
					type: "Cursing Melee/Thrown Spear Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					curse: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Damage: [0, 8, 10, 14, 18, 20, 24, 26, 30, 34, 40],
						AP: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]
					},
					info: {
						turns: 3
					}
				},
				"Hex Web": {
					type: "Virulant Curse",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64],
					},
      					info: {
						range: [0, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6],
						spread: [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4],
						turns: [0, 1, 2, 2, 3, 4, 4, 4, 4, 5, 5]
					},
					factor: { targets: { Lore: [0, 1, 1, 2, 2, 2, 3, 3, 4, 4, 4] } } 
				},
				"Malediction": {
					type: "Death-Curse",
					level: 0,
					cost: {
						AP: "1",
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					curse: {
						Damage: [0, 2, 4, 6, 8, 12, 16, 20, 24, 28, 32],
						"Earth Resist": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
						"On-Death Damage": [0, 8, 16, 32, 64, 128, 156, 186, 256, 300, 362]
					},
					info: {
						range: [0, 5, 5, 5, 5, 5, 5, 6, 6, 6, 7],
						turns: 3,
						targets: 1,
						"Death Radius": [0, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3]
					},
					factor: {
						turns: { Lore: 1 }
					}
				}
			}
		},
		Kyera: {
			title: "Cleric",
			levels: {
				att: attvkk,
				skl: sklvkk,
				tal: talvkk
			},
			base: {
				att: { Strength: 4, Dexterity: 3, Constitution: 5, Willpower: 4, Intelligence: 6, Knowledge: 6 },
				skl: { Hammers: 2, Polearms: 2, Invocation: 3, Conjuring: 3, Lore: 2 },
				tal: { "Smiting Blow": 1, "Myshana's Tears": 1, "Ethereal Anguish": 1, "Warder's Shield": 0, "Piety Ward": 0, "Holy Retribution": 0, "Sacrifice": 0, "Purifying Breeze": 0, "Banishment": 0 }
			},
			factor: {
				HP: { Constitution: 21, Level: 11 },
				SP: { Intelligence: 26, Level: 8 },
				Toughness: { Constitution: 0.75 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 2 }
			},
			talents: {
				"Smiting Blow": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12],
						Damage: [0, 2, 5, 8, 12, 16, 20, 24, 28, 34, 40],
						"Crit Dmg %": [0, 0, 0, 0, 0, 6, 15, 25, 35, 45, 55]
					},
					factor: {}
				},
				"Myshana's Tears": {
					type: "Heal",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					heal: {
						Heal: [0, 32, 70, 130, 180, 240, 300, 380, 460, 600, 900]
					},
					info: {
						range: 6
					},
					factor: {
						Heal: { Lore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
					}
				},
				"Ethereal Anguish": {
					type: "Curse",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					curse: {
						AP: [0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2],
						Dodge: [0, 1, 2, 4, 4, 4, 5, 5, 6, 6, 7],
						Accuracy: [0, 0, 1, 1, 1, 2, 3, 4, 5, 6, 7]
					},
					info: {
						range: [0, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7],
						targets: 0,
						AoE: [0, 1, 1, 1, 5, 5, 5, 5, 5, 5, 9]
					},
					factor: {
						targets: { Conjuring: 1 }
					}
				},
				"Warder's Shield": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					buff: {
						Parry: [0, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6],
						Dodge: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					},
					info: {
						range: 6,
						turns: 8,
						targets: 1,
						AoE: [0, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Piety Ward": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 2,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					buff: {
						"All Resists": [0, 6, 8, 12, 14, 18, 20, 24, 28, 34, 40]
					},
					info: {
						range: 6,
						turns: 8,
						targets: 1,
						AoE: [0, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Conjuring: 1 },
						targets: { Conjuring: 1 }
					}
				},
				"Holy Retribution": {
					type: "Spell Attack",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					attack: {
						Damage: [0, 24, 30, 36, 42, 50, 58, 64, 72, 82, 92],
						"Holy Damage": [0, 26, 32, 38, 48, 58, 68, 78, 88, 98, 120],
						Accuracy: [0, 6, 8, 9, 10, 13, 15, 17, 18, 20, 22]
					},
					info: {
						range: 6
					},
					factor: {}
				},
				"Sacrifice": {
					type: "Heal",
					level: 6,
					cost: {
						AP: 1,
						SP: [0, 16, 28, 40, 52, 68, 82, 94, 104, 112, 124]
					},
					heal: {
						"Heal SP": [0, 10, 18, 26, 36, 48, 60, 72, 96, 112, 128]
					},
					info: {
						range: 6
					},
					factor: {
						"Heal SP": { Lore: [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5] }
					}
				},
				"Purifying Breeze": {
					type: "Heal",
					level: 12,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					heal: {
						Heal: [0, 16, 32, 48, 64, 92, 120, 148, 188, 228, 300],
						Dispel: 1
					},
					info: {
						range: 6,
						targets: 0,
						AoE: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 13]
					},
					factor: {
						targets: { Lore: 1 },
						Heal: { Lore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
					}
				},
				"Banishment": {
					type: "Spell Attack",
					level: 18,
					cost: {
						AP: 4,
						SP: [0, 12, 18, 24, 30, 36, 42, 50, 58, 64, 72]
					},
					attack: {
						Damage: [0, 24, 30, 36, 42, 50, 58, 64, 72, 82, 92],
						"Holy Damage": [0, 32, 38, 48, 54, 66, 74, 76, 84, 96, 100],
						Accuracy: [0, 13, 13, 14, 15, 16, 17, 17, 18, 18, 18]
					},
					info: {
						range: 6,
						targets: 0,
						AoE: [0, 5, 5, 5, 9, 9, 9, 13, 13, 13, 25]
					},
					factor: {
						targets: { Invocation: 1 }
					}
				}
			}
		},
		Fyona: {
			title: "Paladin",
			levels: {
				att: attkf,
				skl: sklkf,
				tal: talkf
			},
			base: {
				HP: 135,
				SP: 116,
				att: { Strength: 5, Dexterity: 4, Constitution: 5, Willpower: 5, Intelligence: 5, Knowledge: 4 },
				skl: { Hammers: 3, Invocation: 2, Leadership: 2, Lore: 3 },
				tal: { "Zealous Strikes": 1, "Hammer Blow": 1, "Blessed Aura": 1, "Consecrated Defense": 0, "Shield of Cortias": 0, "Holy Strickening": 0, "Battlefield Devotion": 0, "Righteous Fervor": 0, "Reckoning": 0 }
			},
			factor: {
				HP: { Constitution: 23, Level: 14 },
				SP: { Intelligence: 22, Level: 6 },
				Toughness: { Constitution: 1.25 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 1.5 }
			},
			talents: {
				"Zealous Strikes": {
					type: "Buff Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14],
						Damage: [0, 2, 5, 8, 12, 15, 18, 21, 24, 27, 30]
					},
					self: {
						Accuracy: [0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7],
						"Holy Dmg": [0, 6, 9, 12, 16, 20, 26, 32, 38, 44, 54]
					},
					info: {
						turns: 3
					},
					factor: {}
				},
				"Hammer Blow": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						Damage: [0, 0, 4, 8, 12, 16, 22, 28, 34, 40, 48],
						"Crit Dmg %": [0, 0, 0, 0, 0, 6, 15, 25, 35, 45, 55]
					},
					factor: {}
				},
				"Blessed Aura": {
					type: "Heal",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					heal: {
						Heal: [0, 24, 56, 96, 132, 168, 208, 248, 298, 358, 412]
					},
					info: {
						range: 3,
						targets: 1,
						AoE: [0, 5, 5, 5, 9, 9, 9, 13, 13, 13, 25]
					},
					factor: {
						Heal: { Lore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
						targets: { Lore: 1 }
					}
				},
				"Consecrated Defense": {
					type: "Buff Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14],
						Damage: [0, 2, 5, 8, 12, 15, 18, 21, 24, 27, 30]
					},
					self: {
						Parry: [0, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9],
						Dodge: [0, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9],
						Armor: [0, 2, 2, 4, 6, 8, 8, 8, 10, 10, 12],
						"Unholy Resist": [0, 2, 4, 0, 0, 0, 0, 0, 0, 0, 0],
						"All Resists": [0, 0, 0, 4, 4, 4, 6, 8, 10, 12, 16]
					},
					info: {
						turns: 3
					},
					factor: {}
				},
				"Shield of Cortias": {
					type: "Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					buff: {
						Parry: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
						Dodge: [0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6]
					},
					info: {
						range: 1,
						turns: 8,
						targets: 1,
						AoE: [0, 5, 5, 5, 5, 9, 9, 9, 9, 9, 13]
					},
					factor: {
						turns: { Leadership: 1 },
						targets: { Leadership: 1 }
					}
				},
				"Holy Strickening": {
					type: "Curse",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					curse: {
						Dodge: [0, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7],
						Resistance: [0, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
						"All Resists": [0, 0, 0, 0, 0, 2, 4, 6, 8, 12, 16]
					},
					info: {
						range: 3,
						turns: 3,
						targets: 0,
						AoE: [0, 1, 5, 5, 9, 9, 9, 9, 9, 9, 13]
					},
					factor: {
						turns: { Invocation: 1 },
						targets: { Invocation: 1 }
					}
				},
				"Battlefield Devotion": {
					type: "Heal",
					level: 6,
					cost: {
						AP: 4,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					heal: {
						Heal: [0, 42, 70, 145, 190, 230, 300, 380, 460, 580, 740],
						Dispel: 1
					},
					info: {
						range: [0, 3, 3, 4, 4, 5, 5, 6, 6, 6, 6]
					},
					factor: {
						Heal: { Lore: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
					}
				},
				"Righteous Fervor": {
					type: "Buff",
					level: 12,
					cost: {
						AP: 3,
						SP: [0, 10, 18, 26, 34, 42, 50, 58, 66, 74, 82]
					},
					buff: {
						HP: [0, 20, 30, 42, 48, 64, 84, 106, 124, 144, 164],
						Armor: [0, 4, 6, 8, 10, 12, 14, 16, 18, 22, 26],
						Unholy: [0, 2, 4, 6, 8, 8, 10, 10, 12, 12, 16]
					},
					info: {
						range: 1,
						turns: 8,
						targets: 0,
						AoE: [0, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9]
					},
					factor: {
						turns: { Leadership: 1 },
						targets: { Leadership: 1 }
					}
				},
				"Reckoning": {
					type: "Curse Attack",
					level: 18,
					cost: {
						AP: "W",
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						"Holy Dmg": [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
					},
					curse: {
						AP: [0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
						Damage: [0, 8, 14, 20, 26, 30, 34, 38, 42, 48, 54],
						Parry: [0, 0, 0, 0, 0, 2, 4, 5, 6, 7, 8]
					},
					info: {
						range: 1,
						turns: 3,
						AoE: 5
					},
					factor: {}
				}
			}
		}
	},
	Sneak: {
		Tamilin: {
			title: "Thief",
			levels: {
				att: attts,
				skl: sklts,
				tal: talts
			},
			base: {
				att: { Strength: 5, Dexterity: 6, Constitution: 5, Willpower: 4, Intelligence: 4, Knowledge: 4 },
				skl: { Blades: 1, Bows: 3, Lore: 2, Security: 3, Stealth: 3 },
				tal: { "Aimed Shot": 1, "Farsight": 1, "Precision Pick": 1, "Disarming Touch": 1, "Blacknight": 0, "Torrent of Steel": 0, "Deadly Intuition": 0, "Silent Stalker": 0, "Ranged Onslaught": 0 }
			},
			factor: {
				HP: { Constitution: 18, Level: 13 },
				SP: { Intelligence: 21, Level: 7 },
				Toughness: { Constitution: 0.75 },
				Dodge: { Dexterity: 1 },
				Resistance: { Willpower: 1 }
			},
			talents: {
				"Aimed Shot": {
					type: "Ranged Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13],
						Damage: [0, 4, 8, 12, 16, 22, 28, 34, 40, 46, 54],
						"Crit Dmg %": [0, 0, 0, 0, 0, 6, 15, 25, 35, 45, 60]
					},
					info: {
						range: "W"
					},
					factor: {}
				},
				"Farsight": {
					type: "Scan",
					range: [0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
					level: 0,
					cost: {
						AP: [0, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					security: {
						"Reveal Area": [0, "small", "medium", "medium", "large", "large", "large", "immense", "immense", "giant", "giant"],
						"Surprise AP": 1
					},
					info: {
						range: [0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
					},
					factor: {}
				},
				"Precision Pick": {
					type: "Lockpick",
					level: 0,
					cost: {
						AP: [0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3],
						SP: [0, 2, 4, 6, 8, 12, 14, 18, 22, 24, 26]
					},
					security: {
						Security: [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					info: {
						range: 1
					},
					factor: {}
				},
				"Disarming Touch": {
					type: "Disarm",
					level: 0,
					cost: {
						AP: [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					security: {
						Security: [0, 2, 4, 4, 5, 6, 7, 7, 8, 9, 10]
					},
					info: {
						range: [0, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8],
						AoE: [0, 1, 1, 5, 5, 5, 9, 9, 9, 9, 13]
					},
					factor: {}
				},
				"Blacknight": {
					type: "Self Buff",
					level: 0,
					cost: {
						AP: 3,
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					self: {
						MP: [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3],
						Dodge: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13],
						Stealth: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]
					},
					info: {
						turns: 20
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Torrent of Steel": {
					type: "Curse Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14],
						Damage: [0, 2, 4, 4, 6, 8, 10, 10, 12, 12, 15]
					},
					curse: {
						AP: [0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2],
						Dodge: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						Resistance: [0, 2, 2, 4, 4, 6, 6, 8, 8, 10, 10]
					},
					info: {
						range: "W",
						turns: 3,
						AoE: [0, 1, 1, 3, 3, 4, 4, 4, 4, 4, 4]
					},
					factor: {}
				},
				"Deadly Intuition": {
					type: "Self Buff",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						"Ranged Accuracy": [0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9],
						"Critical %": [0, 2, 4, 6, 9, 12, 15, 18, 21, 24, 27]
					},
					info: {
						turns: 3
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Silent Stalker": {
					type: "Curse Attack",
					level: 12,
					cost: {
						AP: "W",
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					attack: {
						"Surprise Critical %": [0, 22, 28, 34, 40, 46, 52, 58, 64, 72, 80],
						"Ranged Accuracy": [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					curse: {
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						Armor: [0, 4, 6, 8, 10, 12, 14, 16, 18, 22, 26]
					},
					info: {
						range: "W",
						turns: 8
					},
					factor: {}
				},
				"Ranged Onslaught": {
					type: "Ranged Attack",
					level: 18,
					cost: {
						AP: "W",
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					attack: {
						Accuracy: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
						Damage: [0, 6, 10, 14, 18, 24, 30, 34, 40, 46, 54]
					},
					info: {
						range: "W",
						AoE: [0, 4, 4, 4, 6, 6, 6, 6, 6, 10, 10]
					},
					factor: {}
				}
			}
		},
		Selen: {
			title: "Rogue",
			levels: {
				att: attts,
				skl: sklts,
				tal: talts
			},
			base: {
				HP: 119,
				SP: 102,
				att: { Strength: 5, Dexterity: 6, Constitution: 5, Willpower: 3, Intelligence: 5, Knowledge: 4 },
				skl: { Blades: 3, Bows: 2, Lore: 2, Security: 2, Stealth: 3 },
				tal: { "Frenzied Blows": 1, "Sly Look": 1, "Precision Pick": 1, "Masterful Disarm": 1, "Punishing Blades": 0, "Pinning Shot": 0, "Dance of Shadows": 0, "Quicksilver Defense": 0, "Steel and Shadow": 0 }
			},
			factor: {
				HP: { Constitution: 21, Level: 14 },
				SP: { Intelligence: 19, Level: 7 },
				Toughness: { Constitution: 1 },
				Dodge: { Dexterity: 0.75 },
				Resistance: { Willpower: 0.75 }
			},
			talents: {
				"Frenzied Blows": {
					type: "Melee Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16]
					},
					attack: {
						Accuracy: [0, 3, 5, 6, 7, 8, 9, 11, 12, 14, 15],
						Damage: [0, 3, 6, 9, 12, 15, 20, 24, 28, 32, 40],
						"Critical %": [0, 2, 4, 6, 7, 8, 9, 10, 12, 14, 15]
					},
					factor: {}
				},
				"Sly Look": {
					type: "Scan",
					level: 0,
					cost: {
						AP: [0, 3, 2, 2, 1, 1, 1, 1, 1, 1, 1],
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					security: {
						"Reveal Area": [0, "small", "medium", "medium", "large", "large", "large", "immense", "immense", "giant", "giant"],
						"Surprise AP": 1,
					},
					info: {
						range: [0, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10]
					},
					factor: {}
				},
				"Precision Pick": {
					type: "Lockpick",
					level: 0,
					cost: {
						AP: [0, 6, 6, 6, 5, 5, 5, 4, 4, 4, 3],
						SP: [0, 2, 4, 6, 8, 12, 14, 18, 22, 24, 26]
					},
					security: {
						Security: [0, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12]
					},
					info: {
						range: 1
					},
					factor: {}
				},
				"Masterful Disarm": {
					type: "Disarm",
					level: 0,
					cost: {
						AP: [0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2],
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					security: {
						Save: [0, 2, 4, 4, 5, 6, 7, 7, 8, 9, 10]
					},
					info: {
						range: [0, 2, 3, 4, 4, 5, 5, 6, 6, 7, 8],
						AoE: [0, 1, 1, 5, 5, 5, 9, 9, 9, 9, 13]
					},
					factor: {}
				},
				"Punishing Blades": {
					type: "Curse Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 12, 14, 17, 20, 23, 26]
					},
					attack: {
						Accuracy: [0, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14]
					},
					curse: {
						Damage: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
						Armor: [0, 6, 9, 12, 15, 18, 22, 26, 30, 36, 42]
					},
					info: {
						turns: 3
					},
					factor: {}
				},
				"Pinning Shot": {
					type: "Curse Attack",
					level: 0,
					cost: {
						AP: "W",
						SP: [0, 3, 5, 7, 10, 13, 16, 20, 24, 28, 32]
					},
					attack: {
						Accuracy: [0, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14]
					},
					curse: {
						AP: [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
						Parry: [0, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9],
						Dodge: [0, 2, 3, 4, 5, 6, 6, 7, 7, 8, 10]
					},
					info: {
						range: "W",
						turns: 3,
						AoE: [0, 1, 3, 3, 3, 4, 4, 4, 6, 6, 6]
					},
					factor: {}
				},
				"Dance of Shadows": {
					type: "Self Buff",
					level: 6,
					cost: {
						AP: 3,
						SP: [0, 6, 10, 14, 18, 23, 28, 34, 38, 42, 48]
					},
					self: {
						MP: [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
						"Critical %": [0, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16],
						Stealth: [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
					},
					info: {
						turns: 8
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Quicksilver Defense": {
					type: "Self Buff",
					level: 9,
					cost: {
						AP: 3,
						SP: [0, 8, 12, 18, 24, 30, 36, 42, 50, 58, 64]
					},
					self: {
						Parry: [0, 3, 4, 5, 7, 9, 10, 11, 12, 14, 16],
						Dodge: [0, 3, 4, 6, 7, 8, 9, 11, 12, 14, 16]
					},
					info: {
						turns: 8
					},
					factor: {
						turns: { Lore: 1 }
					}
				},
				"Steel and Shadow": {
					type: "Melee Attack",
					level: 18,
					cost: {
						AP: "W",
						SP: [0, 5, 9, 13, 17, 21, 25, 30, 34, 38, 42]
					},
					attack: {
						"Surprise Critical %": [0, 20, 26, 32, 38, 44, 50, 56, 64, 72, 80],
						Accuracy: [0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						Damage: [0, 3, 6, 9, 12, 15, 20, 24, 28, 32, 40]
					},
					factor: {}
				}
			}
		}
	},
	calcVal(hero, talent, type, key) {
		const tal = HoSData[hero.slot][hero.hero].talents[talent];
		let value = tal[type][key];
		if (Array.isArray(value)) value = value[hero.tal[talent]];
		for (var factor in tal.factor[key]) {
			let multiplier = tal.factor[key][factor];
			if (Array.isArray(multiplier)) multiplier = multiplier[hero.tal[talent]];
			value += multiplier * (hero.skl[factor] || hero.att[factor] || hero[factor]);
		}
		return value;
	}
};

export default HoSData;
