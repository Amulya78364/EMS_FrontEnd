import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterexpensesComponent } from './enterexpenses.component';

describe('EnterexpensesComponent', () => {
  let component: EnterexpensesComponent;
  let fixture: ComponentFixture<EnterexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
