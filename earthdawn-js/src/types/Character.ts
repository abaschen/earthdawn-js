// enum of all the disciplines known in Earthdawn
export enum Discipline {
    "Adept",
    "Alchemist",
    "Animist",
    "Artisan",
    "Assassin",
    "Bard",
    "Beastmaster",
    "Berserker",
    "Bureaucrat",
    "Cavalier",
    "Cleric",
    "Dancer",
    "Druid",
    "Elementalist",
    "Engineer",
    "Fighter",
    "Healer",
    "Hunter",
    "Illusionist",
    "Infiltrator",
    "Knight",
    "Mage",
    "Mystic",
    "Ninja",
    "Nomad",
    "Nun",
    "Outlaw",
    "Priest",
    "Ranger",
    "Rogue",
    "Runemaster",
    "Scout",
}
export interface Bonus {
    attribute: string;
    value: number;
}

export interface Thread {
    rank: number;
    bonus: Bonus;
}

export interface MagicObject {
    id: string;
    name: string;
    description: string;
    maxThreads: number;
    threads: Thread[];
    discovered: GameEvent;
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
        Dexterity: number
        Strength: number
        Toughness: number
        Perception: number
        Willpower: number
        Charisma: number
    },
    //computed getters
    readonly initiative: number
    readonly speed: number
    readonly defense: number
    readonly woundThreshold: number
    talents: [Talent]
}

//The Character interface is a TypeScript interface that defines the structure of a character object. It is used to define the type of the character object in the Character component.

// create an interface to properly define talents. circle of the talent, current rank, if it's discipline, has effort and karma and the page in the book associated with it
export interface Talent {
    id: string,
    circle: number;
    rank: number;
    discipline: boolean;
    effort?: number;
    karma?: boolean;
    page: number;
}