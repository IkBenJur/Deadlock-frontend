import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTabItemComponent } from './item-tab-item.component';

describe('ItemTabItemComponent', () => {
  let component: ItemTabItemComponent;
  let fixture: ComponentFixture<ItemTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemTabItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
