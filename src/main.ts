import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '@buhler/app.component';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { MetaReducer, provideStore, StoreModule } from '@ngrx/store';
import { AppState, reducers } from '@buhler/store/app.state';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import { LineMachineEffects } from '@buhler/store/machine/effects/line-machine.effects';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http';

const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: 'BASE_API_URL',
      useValue: environment.apiUrl,
    },
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools(),
    provideEffects([LineMachineEffects]),
    importProvidersFrom(HttpClientModule),
  ],
});
