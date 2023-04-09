import { Attribute, BaseAttribute } from "./Attributes";

// enum of all the disciplines known in Earthdawn
export enum Discipline {
    "archer",
    "beastmaster",
    "calvaryman",
    "elementalist",
    "illusionist",
    "necromancer",
    "scout",
    "skyraider",
    "swordmaster",
    "thief",
    "troubadour",
    "warrior",
    "blacksmith",
    "wizard",
}

export interface Bonus {
    attribute: string;
    value: number;
}

export interface ObjectThread {
    rank: number;
    bonus: Bonus;
    /**
     * if the keyEvent has not been discovered yet, this will be null
     */
    keyEvent?: string;
}

export interface BookReference {
    page?: { [lang: string]: number }
}
export interface Language {
    id: string;
    spoken: boolean;
    written: boolean;
    read: boolean;
}
export interface InventoryItem extends Identity {

}
export interface MagicObject extends InventoryItem {
    maxThreads: number;
    threads: ObjectThread[];
    event: GameEvent;
}

export interface GameEvent {
    location: string
    date: string
    description: string
}

export interface Character {
    name: string
    race: string
    discipline: Discipline
    circle: number
    attributes: {
        dexterity: Attribute
        strength: Attribute
        toughness: Attribute
        perception: Attribute
        willpower: Attribute
        charisma: Attribute
    },
    currentKarma: number
    maximumKarma: number
    talents: { [id: string]: Talent }
    specialisations: { [id: string]: TalentSpecialisation }
    skills: { [id: string]: ProgressionSkill }
    inventory?: [InventoryItem]
    languages: { [lang: string]: Language }
    spells?: { [id: string]: Spell }
    legendPoints: number
}
export interface Identity {
    readonly id: string
    readonly name: string
    readonly description: string
}
export interface ProgressionSkill extends Identity, BookReference {
    rank: number
    readonly attribute: string
    readonly action: boolean
    readonly effort?: Effort
    readonly karma?: boolean
}
export interface Talent extends ProgressionSkill {
    readonly discipline?: boolean;
}

export class Effort {
    readonly value: number
    readonly canMutate?: boolean
    constructor(value: number) {
        this.value = value;
    }
}
export interface TalentSpecialisation extends Identity, BookReference {
    readonly Discipline: Discipline
    readonly talent: Talent
    readonly rank: number
    readonly effort?: Effort
}


export interface Spell extends Identity, BookReference {
    circle: number
    readonly discipline: Discipline.wizard | Discipline.necromancer | Discipline.elementalist | Discipline.illusionist
    threads: number
    weavingDifficulty: number
    harmonizationDifficulty: number
    range: number | "personal"
    duration: RankDuration | FixedDuration
    effect: string
    difficulty: string

}
export interface FixedDuration {
    value: number
    unit: "round" | "hour" | "day" | "week" | "month" | "year"
}

export interface RankDuration extends FixedDuration {
    rank: number

}

export enum CastingDifficulty {
    TMD = "$t.spells.castingDifficulty.targetMagicDefense",
}