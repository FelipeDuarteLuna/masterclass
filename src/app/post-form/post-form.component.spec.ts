import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFormComponent } from './post-form.component';
import { Title } from '@angular/platform-browser';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill input title correctly', () => {
    //Simula usuário digitando
    const title = fixture.nativeElement.querySelector('input[formControlName="title"]');
    title.value = 'Post title Luna';
    title.dispatchEvent(new Event('input'));

    // Garante que o valor foi preenchido corretamente
    expect(component.form.controls.title.value).toBe('Post title Luna');
  });

  it('should fill input body correctly', () => {
    //Simula usuário digitando
    const body = fixture.nativeElement.querySelector('textarea[formControlName="body"]');
    body.value = 'Post body Luna';
    body.dispatchEvent(new Event('input'));

    // Garante que o valor foi preenchido corretamente
    expect(component.form.controls.body.value).toBe('Post body Luna');
  });

  it('should submit form correctly', () => {
    spyOn(component.submitForm, 'emit');

    //Simula usuário digitando
    const title = fixture.nativeElement.querySelector('input[formControlName="title"]');
    title.value = 'Post title Luna';
    title.dispatchEvent(new Event('input'));

    const body = fixture.nativeElement.querySelector('textarea[formControlName="body"]');
    body.value = 'Post body Luna';
    body.dispatchEvent(new Event('input'));

    //Simula usuário submetendo o formulário
    const formSubmit = fixture.nativeElement.querySelector('form');
    formSubmit.dispatchEvent(new Event('submit'));

    // Garante que o valor foi preenchido corretamente
    expect(component.submitForm.emit).toHaveBeenCalledWith({title: 'Post title Luna', body: 'Post body Luna'});
  });


});
