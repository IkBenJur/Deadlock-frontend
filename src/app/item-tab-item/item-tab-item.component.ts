import { Component, Input, TemplateRef } from '@angular/core';
import { Item } from '../../types/item';
import { ItemService } from '../../services/item.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ItemCardComponent } from "../item-builds/item-card/item-card.component";

@Component({
  selector: 'app-item-tab-item',
  standalone: true,
  imports: [AsyncPipe, CommonModule, ItemCardComponent],
  templateUrl: './item-tab-item.component.html',
})
export class ItemTabItemComponent {
  @Input() active = false;
  @Input() tabTitle!: String;
  @Input() type!: string;
  items$!: Observable<Item[]>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items$ = this.itemService.getByType(this.type);
  }
}
