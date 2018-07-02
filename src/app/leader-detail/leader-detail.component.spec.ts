import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderDetailComponent } from './leader-detail.component';

describe('LeaderDetailComponent', () => {
  let component: LeaderDetailComponent;
  let fixture: ComponentFixture<LeaderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
