export type Item = {
  itemId: number;
  name: string;
  cost: number;
  type: string;
  active: boolean;
  effects: {
    itemEffectId: number;
    effect: string;
  }[];
};
