import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollegueComponent } from './add-collegue.component';

describe('AddCollegueComponent', () => {
  let component: AddCollegueComponent;
  let fixture: ComponentFixture<AddCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
