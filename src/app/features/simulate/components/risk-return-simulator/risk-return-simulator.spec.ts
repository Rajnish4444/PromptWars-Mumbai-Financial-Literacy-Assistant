import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RiskReturnSimulator } from './risk-return-simulator';

describe('RiskReturnSimulator', () => {
  let component: RiskReturnSimulator;
  let fixture: ComponentFixture<RiskReturnSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskReturnSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiskReturnSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
