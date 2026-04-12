import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { CompoundInterestSimulator } from './compound-interest-simulator';

describe('CompoundInterestSimulator', () => {
  let component: CompoundInterestSimulator;
  let fixture: ComponentFixture<CompoundInterestSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoundInterestSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoundInterestSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
