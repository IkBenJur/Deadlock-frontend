import { Ability } from "./ability";

export type Hero = {
  heroId: number;
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
  abilities: Ability[];
};
