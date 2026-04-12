import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { InflationSimulator } from './inflation-simulator';

describe('InflationSimulator', () => {
  let component: InflationSimulator;
  let fixture: ComponentFixture<InflationSimulator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InflationSimulator],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InflationSimulator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
