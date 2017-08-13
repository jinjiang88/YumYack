import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendspostsComponent } from './friendsposts.component';
import { RatingModule } from 'ng2-rating';

describe('FriendspostsComponent', () => {
  let component: FriendspostsComponent;
  let fixture: ComponentFixture<FriendspostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendspostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendspostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
