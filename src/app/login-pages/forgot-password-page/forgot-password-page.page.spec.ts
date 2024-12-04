import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ForgotPasswordPagePage } from './forgot-password-page.page';

describe('ForgotPasswordPagePage', () => {
  let component: ForgotPasswordPagePage;
  let fixture: ComponentFixture<ForgotPasswordPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
