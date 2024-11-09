import { Component } from '@angular/core';
import { ItemSet } from '../../../types/itemSet';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ItemSetDisplayComponent } from '../item-set-display/item-set-display.component';

@Component({
  selector: 'app-create-build',
  standalone: true,
  imports: [ReactiveFormsModule, ItemSetDisplayComponent],
  templateUrl: './create-build.component.html',
})
export class CreateBuildComponent {
  itemSets: ItemSet[] = [
    {
      name: 'New item set',
      items: [],
    },
  ];
  buildForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.buildForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      itemSets: [this.itemSets, Validators.required],
      hero: ['Kelvin', Validators.required],
    });
  }

  addItemSet() {
    this.itemSets.push({
      name: 'New Item Set',
      items: [],
    });
    this.buildForm.setValue({
      ...this.buildForm.value,
      itemSets: this.itemSets,
    });
  }

  removeItemSet(set: ItemSet) {
    this.itemSets = this.itemSets.filter((s) => s != set);
    this.buildForm.setValue({
      ...this.buildForm.value,
      itemSets: this.itemSets,
    });
  }

  addItemToItemSet(set: ItemSet) {
    set.items.push({
      itemId: 1,
      name: 'Basic Magazine',
      cost: 500,
      type: 'Weapon',
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
    });

    console.log(this.buildForm.value)
  }

  onSubmit() {
    console.log(this.buildForm.value);
  }
}
