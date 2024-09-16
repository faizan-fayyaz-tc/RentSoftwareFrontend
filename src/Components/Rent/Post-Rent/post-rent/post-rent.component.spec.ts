import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostRentComponent } from './post-rent.component';

describe('PostRentComponent', () => {
  let component: PostRentComponent;
  let fixture: ComponentFixture<PostRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostRentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
