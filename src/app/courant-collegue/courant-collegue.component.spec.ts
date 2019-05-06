import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourantCollegueComponent } from './courant-collegue.component';

describe('CourantCollegueComponent', () => {
  let component: CourantCollegueComponent;
  let fixture: ComponentFixture<CourantCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourantCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourantCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
