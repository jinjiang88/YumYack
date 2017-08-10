import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcreationComponent } from './postcreation.component';

describe('PostcreationComponent', () => {
  let component: PostcreationComponent;
  let fixture: ComponentFixture<PostcreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostcreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
