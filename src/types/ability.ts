export type Ability = {
  name: string;
  description: string;
  cooldown: number;
  upgradeOne: string;
  upgradeTwo: string;
  upgradeThree: string;
  abilityNumber: number;
  abilityEffects: [
    {
      value: number;
      effect: string;
    }
  ];
};
