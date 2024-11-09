import { Component, Input } from '@angular/core';
import { Item } from '../../../types/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.component.html'
})
export class ItemCardComponent {
  @Input() item!: Item;
}
