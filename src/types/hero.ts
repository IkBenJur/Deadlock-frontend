export type Hero = {
  name: string;
  description: string;
  dps: number;
  bulletDamage: number;
  ammo: number;
  bulletPerSeconds: number;
  lightMelee: number;
  heavyMelee: number;
  maxHealth: number;
  regen: number;
  bulletResist: number;
  spiritResist: number;
  moveSpeed: number;
  sprintSpeed: number;
  stamina: number;
  abilities: [
    {
      name: string;
      description: string;
      cooldown: number;
      upgradeOne: string;
      upgradeTwo: string;
      upgradeThree: string;
      abilityEffects: [
        {
          value: number;
          effect: string;
        }
      ];
    }
  ];
};
