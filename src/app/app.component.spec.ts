import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
      expect(component).toBeTruthy();
  });

  it('should add a post to list', () => {
    const post = { title: 'Post title Luna', body: 'Post body Luna' };
    component.addPost(post);
    expect(component.posts()).toEqual([{ title: 'Post title Luna', body: 'Post body Luna' }]);

    component.addPost({title: 'Post title Luna 2', body: 'Post body Luna 2'});
    expect(component.posts()).toEqual([{ title: 'Post title Luna', body: 'Post body Luna' },
                              {title: 'Post title Luna 2', body: 'Post body Luna 2'}]);
  });

});
