export type Die = "d4" | "d6" | "d8" | "d10" | "d12" | "d20";


export type Dice = {
  d4?: number;
  d6?: number;
  d8?: number;
  d10?: number;
  d12?: number;
  d20?: number;
  modifier?: number;
};

export const baseSteps: Dice[] = [
  { d4: 1 },
  { d6: 1 },
  { d8: 1 },
  { d10: 1 },
  { d12: 1 },
  { d6: 2 },
  { d8: 1, d6: 1 },
  { d10: 1, d6: 1 },
  { d10: 1, d8: 1 },
  { d10: 2 },
  { d12: 1, d10: 1 },
  { d20: 1, d4: 1 },
  { d20: 1, d6: 1 },
  { d20: 1, d8: 1 },
  { d20: 1, d10: 1 },
  { d20: 1, d12: 1 },
  { d20: 1, d6: 2 },
  { d20: 1, d8: 1, d6: 1 },
  { d20: 1, d10: 1, d6: 1 },
  { d20: 1, d10: 1, d8: 1 },
  { d20: 1, d10: 2 },
  { d20: 1, d12: 1, d10: 1 },
];


function generateStepDice(step: number): Dice {
  if (step < 1) {
    throw new Error("Invalid step number");
  }
  if (step === 1) return { d4: 1, modifier: -2 };
  if (step === 2) return { d4: 1, modifier: -1 };
  if (step <= baseSteps.length) {
    return baseSteps[step - 1];
  }

  const cycleIndex = Math.floor((step - 3) / 22);
  const cycleStep = (step - 3) % 22;

  const baseDice = baseSteps[cycleStep];
  const dice: Dice = {
    d4: baseDice.d4,
    d6: baseDice.d6,
    d8: baseDice.d8,
    d10: baseDice.d10,
    d12: baseDice.d12,
    d20: baseDice.d20
  };

  if (cycleIndex > 0) {
    dice.d20 = (dice.d20 || 0) + cycleIndex;
    dice.d10 = (dice.d10 || 0) + cycleIndex;
    dice.d8 = (dice.d8 || 0) + cycleIndex;
  }

  return dice;
}

function prettyDice(dice: Dice): string {
  // print from highest to lowest value in the form of "2D20 + 1D10 + 1D8 + 1D6 + 1D4"
  const diceKeys = Object.keys(dice).sort((a, b) => {
    const aVal = parseInt(a.slice(1));
    const bVal = parseInt(b.slice(1));
    return bVal - aVal;
  }
  );
  return diceKeys
    //filter undefined or 0 values
    .filter(key => dice[key as Die])

    .map(key => {
      const die = key as Die;
      // do not print 1D4, just print D4
      return `${(dice[die] ?? 0) > 1 ? dice[die] : ''}${die}`;
    }).join(" + ");

}

// class representing a roll of dice with pretty printing
export class Roll {
  step: number;
  constructor(step: number) {
    this.step = step;
  }
  dice(): Dice {
    return generateStepDice(this.step);
  }

  // method to return a new roll with a step modifier
  addStep(step: number): Roll {
    return new Roll(this.step + step);
  }

  toString() {
    return prettyDice(this.dice());
  }
}
