import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../types/item';
import { ItemCardComponent } from '../item-card/item-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-set-display',
  standalone: true,
  imports: [ItemCardComponent, CommonModule, FormsModule],
  templateUrl: './item-set-display.component.html',
})
export class ItemSetDisplayComponent {
  @Input() name!: String;
  @Input() items!: Item[];

  @Output() updatedName = new EventEmitter<String>();
  @Output() updatedItems = new EventEmitter<Item[]>();
  @Output() removeItemSet = new EventEmitter<String>();

  isEditEnable = false;

  constructor() {}

  onEdit() {
    this.isEditEnable = !this.isEditEnable;
    this.updatedName.emit(this.name)
  }

  editName() {
    this.updatedName.emit(this.name)
  }

  addItem() {
    this.items.push({
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

    this.updatedItems.emit(this.items);
  }

  removeItem(item: Item) {
    const index = this.items.findIndex((i) => i == item);

    if (index != -1) {
      this.items.splice(index, 1);
      this.updatedItems.emit(this.items);
    }
  }

  remove(){
    this.removeItemSet.emit("Remove item set")
  }
}
