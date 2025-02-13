import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardComponent } from './post-card.component';

describe('PostCardComponent', () => {
  let component: PostCardComponent;
  let fixture: ComponentFixture<PostCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('post', { title: 'Post Title Luna', body: 'Post Body Luna' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the post title', () => {
    const title = fixture.nativeElement.querySelector('.post-title');
    expect(title.textContent).toContain('Post Title Luna');
  });

  it('should display the post body', () => {
    const body = fixture.nativeElement.querySelector('.post-body');
    expect(body.textContent).toContain('Post Body Luna');
  });

});
