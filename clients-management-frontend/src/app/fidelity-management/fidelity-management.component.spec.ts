import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelityManagementComponent } from './fidelity-management.component';

describe('FidelityManagementComponent', () => {
  let component: FidelityManagementComponent;
  let fixture: ComponentFixture<FidelityManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FidelityManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FidelityManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
