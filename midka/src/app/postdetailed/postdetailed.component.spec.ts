import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetailedComponent } from './postdetailed.component';

describe('PostdetailedComponent', () => {
  let component: PostdetailedComponent;
  let fixture: ComponentFixture<PostdetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdetailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
