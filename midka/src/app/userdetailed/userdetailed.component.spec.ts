import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailedComponent } from './userdetailed.component';

describe('UserdetailedComponent', () => {
  let component: UserdetailedComponent;
  let fixture: ComponentFixture<UserdetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
