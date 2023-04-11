
import { Attribute } from '../types/Attributes';
import { CastingDifficulty, Character, Discipline } from '../types/Character';
import { createStore } from 'vuex'

const character: Character = {
    name: "Therandir",
    race: "windling",
    discipline: Discipline.wizard,
    circle: 8,
    currentKarma: 60,
    maximumKarma: 60,
    specialisations: {},
    attributes: {
        dexterity: new Attribute(16),
        strength: new Attribute(14),
        toughness: new Attribute(14),
        perception: new Attribute(14),
        willpower: new Attribute(16),
        charisma: new Attribute(14),
    },
    "talents": {
        "spellcasting": {
            id: "spellcasting",
            name: "$t.talents.spellcasting.name",
            description: "$t.talents.spellcasting.description",
            discipline: true,
            rank: 20,
            attribute: "perception",
            action: true,
            page: {
                fr: 190
            }

        }
    },
    "skills": {

    },
    "languages": {
        "throalic": {
            id: "throalic",
            read: true,
            written: true,
            spoken: true
        },

    },
    "spells": {
        "fireball": {
            id: "fireball",
            name: "$t.spells.fireball.name",
            description: "$t.spells.fireball.description",
            effect: "$t.spells.fireball.effect",
            circle: 1,
            discipline: Discipline.elementalist,
            threads: 1,
            weavingDifficulty: 10,
            harmonizationDifficulty: 15,
            duration: { value: 1, unit: "round" },
            difficulty: CastingDifficulty.TMD,
            range: 10,
            page: {
                fr: 190
            }
        }
    },
    legendPoints: 220000
}


export default createStore({

    state: {
        character: character
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
});