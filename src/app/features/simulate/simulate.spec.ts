import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Simulate } from './simulate';

describe('Simulate', () => {
  let component: Simulate;
  let fixture: ComponentFixture<Simulate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simulate],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simulate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
