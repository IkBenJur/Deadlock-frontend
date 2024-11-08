import { Component, ContentChildren, QueryList } from '@angular/core';
import { ItemTabItemComponent } from '../item-tab-item/item-tab-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-tabs.component.html',
})
export class ItemTabsComponent {
  @ContentChildren(ItemTabItemComponent) tabs!: QueryList<ItemTabItemComponent>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab)=>tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: ItemTabItemComponent) {
    this.tabs.toArray().forEach(tab => tab.active = false);

    tab.active = true;
  }
}
