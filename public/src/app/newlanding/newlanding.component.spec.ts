import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlandingComponent } from './newlanding.component';

describe('NewlandingComponent', () => {
  let component: NewlandingComponent;
  let fixture: ComponentFixture<NewlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
