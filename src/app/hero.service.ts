import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [
    {
      name: 'Kelvin',
      description:
        'Kelvin is a beginner-friendly hero who can adapt to a wide range of playstyles. \r\n\r\nWant to be a tanky frontliner? Prefer to be more supportive with heals? Split push and apply pressure across the map? He’s your guy.',
      dps: 83,
      bulletDamage: 21,
      ammo: 15,
      bulletPerSeconds: 4,
      lightMelee: 63,
      heavyMelee: 116,
      maxHealth: 600,
      regen: 2,
      bulletResist: 0,
      spiritResist: 10,
      moveSpeed: 6.5,
      sprintSpeed: 0,
      stamina: 3,
      abilities: [
        {
          name: 'Frost Grenade',
          description:
            'Throw a grenade that explodes in a cloud of freezing ice, damaging and slowing enemies.',
          cooldown: 22,
          upgradeOne: '+1 Charges',
          upgradeTwo:
            'Frost Grenade now heals 125 HP to friendly targets. Scales with Spirit.',
          upgradeThree: '+175 Damage',
          abilityEffects: [
            {
              value: 1,
              effect: 'Charges',
            },
          ],
        },
      ],
    },
  ];

  constructor() { }

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number){
    return this.heroes[id];
  }
}
