import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StartPage1Page } from './start-page1.page';

describe('StartPage1Page', () => {
  let component: StartPage1Page;
  let fixture: ComponentFixture<StartPage1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StartPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
