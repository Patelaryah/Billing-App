import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationPage2Page } from './registration-otp.page';

describe('RegistrationPage2Page', () => {
  let component: RegistrationPage2Page;
  let fixture: ComponentFixture<RegistrationPage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
