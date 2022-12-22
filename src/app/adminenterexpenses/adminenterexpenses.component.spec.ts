import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminenterexpensesComponent } from './adminenterexpenses.component';

describe('AdminenterexpensesComponent', () => {
  let component: AdminenterexpensesComponent;
  let fixture: ComponentFixture<AdminenterexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminenterexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminenterexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
