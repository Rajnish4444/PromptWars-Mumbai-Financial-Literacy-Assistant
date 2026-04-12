import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SavingsSimulator } from './savings-simulator';

describe('SavingsSimulator', () => {
  let component: SavingsSimulator;
  let fixture: ComponentFixture<SavingsSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingsSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
