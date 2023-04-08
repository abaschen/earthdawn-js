

export class Attribute {
    value: number;
    constructor(value: number) {
        this.value = value;
    }
    level(): number {
        return Math.floor((this.value - 1) / 3) + 2;
    }
    defense(): number {
        const base = [2, 2, 3, 3, 4, 4, 4];
        const value = this.value;
        if (value < 1) {
            throw new Error("Invalid input value");
        }

        const cycleIndex = Math.floor(value / 7);
        const cycleStep = value % 7;
        return base[cycleStep] + cycleIndex * 3;
    }
    _movement(): number {
        const value = this.value;
        if (value < 1) {
            throw new Error("Invalid input value");
        }

        const offset = 5;
        if (value <= 5) {
            return offset + value;
        }
        if (value <= 10) {
            return value * 2;
        }

        let incrementMultiplier = Math.floor((value) / 10) + 1; // 2 for 10 to 20, 3 for 20 to 30, etc.
        let incrementBase = (value) % 10; // 0 for 10 to 20, 1 for 20 to 30, etc.

        let currentValue = incrementBase * incrementMultiplier + 10;
        // value = 16 --> 32 = 2 * 10 + 6 * 2
        // value = 22 --> 46 = 2 * 10 + 2 * 10 + 2 * 3
        // value = 33 --> 82 = 3 * 10 + 2 * 10 + 2 * 10 + 3 * 4
        while (incrementMultiplier > 0) {
            currentValue += (incrementMultiplier - 1) * 10;
            incrementMultiplier--;
        }

        return currentValue;

    }
    combatMovement(): number {
        return this._movement();
    }
    runMovement(): number {
        return 2 * this.combatMovement();
    }

    _capacity(): number {
        const base = [5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 95, 110, 125, 140, 160, 180, 200, 230, 260, 290, 330, 370, 410, 460, 510, 560, 620, 680, 740, 810, 880, 950, 1030, 1110, 1190, 1280, 1370, 1460, 1560, 1660, 1760, 1870, 1980, 2090, 2210, 2330, 2450, 2580, 2710];
        let value = this.value;
        if (value < 1) {
            throw new Error("Invalid input value");
        }
        if (value <= 50) {
            return base[value - 1];
        } throw new Error("Invalid input value");
    }
    transportCapacity(): number {
        return this._capacity();
    }
    liftingCapacity(): number {
        return 2 * this._capacity();
    }
    unconsciousThreshold() {
        const base = [1, 2, 4];
        const value = this.value - 1;
        if (value < 0) {
            throw new Error("Invalid input value");
        }
        const incrementMultiplier = Math.floor(value / 3);
        let result = 9 + base[value % 3] + 4 * incrementMultiplier;
        if (value >= 10) {
            // don't ask me why, but this is how it is
            result += 1;
        }
        if (value >= 20) {
            result += 1;
        }
        return result;
    }
    deathThreshold() {
        return this.unconsciousThreshold() + 9;
    }
    greviousWound() {
        let value = this.value;
        if (value < 1) {
            throw new Error("Invalid input value");
        }

        if (value < 20) {
            return Math.floor(value / 2) + 3;
        }
        value -= 20;
        if (value < 20) {
            return 13 + Math.floor((value % 5) / 3) + Math.floor(value / 5) * 2;
        }
        value -= 20;
        // from 40
        return 21 + Math.floor((value % 7) / 4) + Math.floor(value / 7) * 2;
    }
}
console.log(`| value | level | defense | combat movement | run movement | transport capacity | lifting capacity | unconscious threshold | death threshold | grevious wound |`);
console.log('| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |');
// print attributes from 1 to 50
for (let i = 1; i <= 50; i++) {
    const attribute = new Attribute(i);
    console.log(`| ${i} | ${attribute.level()} | ${attribute.defense()} | ${attribute.combatMovement()} | ${attribute.runMovement()} | ${attribute.transportCapacity()} | ${attribute.liftingCapacity()} | ${attribute.unconsciousThreshold()} | ${attribute.deathThreshold()} | ${attribute.greviousWound()} |`);
}