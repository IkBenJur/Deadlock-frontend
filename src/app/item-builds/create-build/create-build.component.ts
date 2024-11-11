import { Component } from '@angular/core';
import { ItemSet } from '../../../types/itemSet';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ItemSetDisplayFormComponent } from '../item-set-display-form/item-set-display.component-form';
import { Item } from '../../../types/item';
import { BuildService } from '../../../services/build.service';

@Component({
  selector: 'app-create-build',
  standalone: true,
  imports: [ReactiveFormsModule, ItemSetDisplayFormComponent],
  templateUrl: './create-build.component.html',
})
export class CreateBuildComponent {
  hero = {
    heroId: 1,
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
    spiritResist: 0,
    moveSpeed: 6.5,
    sprintSpeed: 0,
    stamina: 3,
    abilities: [
      {
        name: 'Frozen Shelter',
        description:
          'Kelvin freezes the air around him, creating an impenetrable dome around himself. While in the dome, allies rapidly regenerate health and enemies are slowed.',
        cooldown: 127,
        upgradeOne: '+40% Fire Rate Slow',
        upgradeTwo: '-40s Cooldown',
        upgradeThree: '+70 Health Regen and now scales with Spirit Power',
        abilityNumber: 4,
        abilityEffects: [
          {
            value: '5.5s',
            effect: 'Duration',
          },
          {
            value: '10m',
            effect: 'Radius',
          },
          {
            value: '35%',
            effect: 'Movement Slow',
          },
          {
            value: '+120',
            effect: 'Health Regen',
          },
        ],
      },
      {
        name: 'Ice Path',
        description:
          'Kelvin creates a floating trail of ice and snow that gives movement bonuses to him and his allies. Kelvin gains 60% slow resistance. \r\nPress [LEFT SHIFT] / [LEFT CTRL] to travel up or down while in Ice Path.',
        cooldown: 42,
        upgradeOne: '+4m/s Sprint Speed',
        upgradeTwo: '-16s Cooldown',
        upgradeThree:
          'While active, gain +1 Spirit Power per meter of Ice Path trail created. Max of 55 Spirit Power',
        abilityNumber: 2,
        abilityEffects: [
          {
            value: '8s',
            effect: 'Duration',
          },
          {
            value: '+2m/s Spring Speed',
            effect: 'Sprint Speed',
          },
          {
            value: '+2m/s',
            effect: 'Move Speed',
          },
        ],
      },
      {
        name: 'Frost Grenade',
        description:
          'Throw a grenade that explodes in a cloud of freezing ice, damaging and slowing enemies.',
        cooldown: 22,
        upgradeOne: '+1 Charges',
        upgradeTwo:
          'Frost Grenade now heals 125 HP to friendly targets. Scales with Spirit.',
        upgradeThree: '+175 Damage',
        abilityNumber: 1,
        abilityEffects: [
          {
            value: '7s',
            effect: 'Cooldown Between Charges',
          },
          {
            value: '6.5m',
            effect: 'Radius',
          },
          {
            value: '80',
            effect: 'Damage',
          },
          {
            value: '40%',
            effect: 'Movement slow',
          },
          {
            value: '1',
            effect: 'Charges',
          },
          {
            value: '4s',
            effect: 'Slow Duration',
          },
        ],
      },
      {
        name: 'Arctic Beam',
        description:
          'Shoot freezing cold energy out in front of you, damaging targets and building up movement and fire rate slow against them the longer you sustain the beam on them. You have reduced movement speed while using Arctic Beam.',
        cooldown: 24,
        upgradeOne: '-8s Cooldown',
        upgradeTwo: '+40 DPS',
        upgradeThree:
          'Fires 2 Additional Arctic Beams toward enemies within 13m of the last target hit',
        abilityNumber: 3,
        abilityEffects: [
          {
            value: '2s',
            effect: 'Max Slow Build Time',
          },
          {
            value: '60',
            effect: 'DPS',
          },
          {
            value: '5s',
            effect: 'Channel Time',
          },
          {
            value: '40%',
            effect: 'Max Slow',
          },
          {
            value: '25m',
            effect: 'Beam Length',
          },
          {
            value: '40%',
            effect: 'Max Fire Rate Slow',
          },
          {
            value: '2s',
            effect: 'Slow Linger',
          },
        ],
      },
    ],
    builds: [
      {
        buildId: 1,
        name: 'Kelvin Build',
        description: 'Best Kelvin Build',
        createdAt: '2024-11-05T09:30:12.000+00:00',
        itemSets: [
          {
            itemSetId: 1,
            name: 'Early Game',
            items: [
              {
                itemId: 1,
                name: 'Basic Magazine',
                cost: 500,
                type: 'WEAPON',
                active: false,
                effects: [
                  {
                    itemEffectId: 2,
                    effect: '+15% Weapon Damage',
                  },
                  {
                    itemEffectId: 1,
                    effect: '+24% Ammo',
                  },
                ],
              },
            ],
          },
        ],
        hero: 1,
      },
    ],
  };

  itemSets: ItemSet[] = [
    {
      name: 'New item set',
      items: [],
    },
  ];
  buildForm!: FormGroup;

  constructor(private fb: FormBuilder, private buildService: BuildService) {
    this.buildForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      itemSets: [this.itemSets, Validators.required],
      hero: [this.hero, Validators.required],
    });
  }

  addItemSet() {
    this.itemSets.push({
      name: 'New Item Set',
      items: [],
    });
  }

  removeItemSet(set: ItemSet) {
    this.itemSets = this.itemSets.filter((s) => s != set);

    this.buildForm.setValue({
      ...this.buildForm.value,
      itemSets: this.itemSets,
    });
  }

  getUpdatedItems(set: ItemSet, items: Item[]) {
    set.items = items;
  }

  getUpdatedName(set: ItemSet, name: String) {
    set.name = name;
  }

  onSubmit() {
    const validItemSets = this.itemSets.every(
      (itemSet) => itemSet.items.length >= 1
    );

    if (this.buildForm.valid && validItemSets) {
      this.buildService
        .createNew(this.buildForm.value)
        .subscribe((res) => console.log(res));
    }
  }
}
