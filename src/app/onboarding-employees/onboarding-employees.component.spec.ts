import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingEmployeesComponent } from './onboarding-employees.component';

describe('OnboardingEmployeesComponent', () => {
  let component: OnboardingEmployeesComponent;
  let fixture: ComponentFixture<OnboardingEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingEmployeesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
