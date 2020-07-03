import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { CounterComponent } from './components/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './reducers';
import { MediaContainerComponent } from './components/media-container/media-container.component';
import { MediaEntryComponent } from './components/media-entry/media-entry.component';
import { MediaListComponent } from './components/media-list/media-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { MediaEffects } from './effects/media.effects';
import { ErrorDisplayComponent } from './components/error-display/error-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    DashboardComponent,
    NavComponent,
    CounterComponent,
    MediaContainerComponent,
    MediaEntryComponent,
    MediaListComponent,
    ErrorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([MediaEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
