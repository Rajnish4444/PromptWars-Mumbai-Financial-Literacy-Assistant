import { ApplicationConfig, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

// Firebase Integrations
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideAnalytics, getAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { provideAppCheck, ReCaptchaEnterpriseProvider, initializeAppCheck } from '@angular/fire/app-check';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideAnimationsAsync(),
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true });
      }
      return auth;
    }),
    
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),

    // Initialize AppCheck conditionally if production
    provideAppCheck(() => {
      let appCheck;
      if (!environment.useEmulators) {
        // Require dummy site key for compilation constraints
        // In real deploy, use standard recaptcha keys
        appCheck = initializeAppCheck(undefined, {
          provider: new ReCaptchaEnterpriseProvider('6Ld_dummy_REPLACE_ME_IN_PROD'),
          isTokenAutoRefreshEnabled: true
        });
      }
      return appCheck || undefined as any;
    }),

    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService
  ]
};
