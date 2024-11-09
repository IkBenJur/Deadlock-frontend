import { Component, Input } from '@angular/core';
import { Item } from '../../../types/item';
import { ItemCardComponent } from "../item-card/item-card.component";

@Component({
  selector: 'app-item-set-display',
  standalone: true,
  imports: [ItemCardComponent],
  templateUrl: './item-set-display.component.html'
})
export class ItemSetDisplayComponent {
  @Input() name!: String;
  @Input() items!: Item[];

  constructor() {}
}
