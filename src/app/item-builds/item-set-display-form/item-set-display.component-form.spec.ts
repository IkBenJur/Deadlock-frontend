import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSetDisplayFormComponent } from './item-set-display.component-form';

describe('ItemSetDisplayFormComponent', () => {
  let component: ItemSetDisplayFormComponent;
  let fixture: ComponentFixture<ItemSetDisplayFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSetDisplayFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSetDisplayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
