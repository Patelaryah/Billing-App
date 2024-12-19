import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPartiesPage } from './add-parties.page';

describe('AddPartiesPage', () => {
  let component: AddPartiesPage;
  let fixture: ComponentFixture<AddPartiesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
