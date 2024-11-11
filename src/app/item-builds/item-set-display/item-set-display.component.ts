import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../types/item';
import { ItemCardComponent } from '../item-card/item-card.component';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ItemService } from '../../item.service';

@Component({
  selector: 'app-item-set-display',
  standalone: true,
  imports: [ItemCardComponent, CommonModule, FormsModule, AsyncPipe],
  templateUrl: './item-set-display.component.html',
})
export class ItemSetDisplayComponent {
  @Input() name!: String;
  @Input() selectedItems!: Item[];
  items$!: Observable<Item[]>

  @Output() updatedName = new EventEmitter<String>();
  @Output() updatedItems = new EventEmitter<Item[]>();
  @Output() removeItemSet = new EventEmitter<String>();

  isEditEnable = false;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items$ = this.itemService.getAllItems();
  }

  onEdit() {
    this.isEditEnable = !this.isEditEnable;
    this.updatedName.emit(this.name)
  }

  editName() {
    this.updatedName.emit(this.name)
  }

  addItem(item: Item) {
    this.selectedItems.push(item);

    this.updatedItems.emit(this.selectedItems);
  }

  removeItem(item: Item) {
    const index = this.selectedItems.findIndex((i) => i == item);

    if (index != -1) {
      this.selectedItems.splice(index, 1);
      this.updatedItems.emit(this.selectedItems);
    }
  }

  remove(){
    this.removeItemSet.emit("Remove item set")
  }
}
