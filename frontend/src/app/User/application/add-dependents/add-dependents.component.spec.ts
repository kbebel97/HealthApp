import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDependentsComponent } from './add-dependents.component';

describe('AddDependentsComponent', () => {
  let component: AddDependentsComponent;
  let fixture: ComponentFixture<AddDependentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDependentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDependentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
