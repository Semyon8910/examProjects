import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccActionComponent } from './acc-action.component';

describe('AccActionComponent', () => {
  let component: AccActionComponent;
  let fixture: ComponentFixture<AccActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
