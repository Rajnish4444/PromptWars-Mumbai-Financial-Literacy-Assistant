import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayout } from './app-layout';

describe('AppLayout', () => {
  let component: AppLayout;
  let fixture: ComponentFixture<AppLayout>;

  beforeEach(async () => {
    const { provideRouter } = await import('@angular/router');
    const { NoopAnimationsModule } = await import('@angular/platform-browser/animations');
    await TestBed.configureTestingModule({
      imports: [AppLayout, NoopAnimationsModule],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(AppLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
