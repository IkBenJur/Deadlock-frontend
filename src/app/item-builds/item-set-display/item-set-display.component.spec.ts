import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetDisplayComponent } from './item-set-display.component';

describe('ItemSetDisplayComponent', () => {
  let component: ItemSetDisplayComponent;
  let fixture: ComponentFixture<ItemSetDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSetDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSetDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
