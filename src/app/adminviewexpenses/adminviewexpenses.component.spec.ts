import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewexpensesComponent } from './adminviewexpenses.component';

describe('AdminviewexpensesComponent', () => {
  let component: AdminviewexpensesComponent;
  let fixture: ComponentFixture<AdminviewexpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewexpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewexpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
