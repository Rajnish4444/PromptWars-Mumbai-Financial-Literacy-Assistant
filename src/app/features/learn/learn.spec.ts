import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Learn } from './learn';

describe('Learn', () => {
  let component: Learn;
  let fixture: ComponentFixture<Learn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Learn],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(Learn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list of modules', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('app-module-card').length).toBeGreaterThan(0);
  });
});
