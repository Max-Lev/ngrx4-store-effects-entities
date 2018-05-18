import { DataEffectsService } from './services/data-effects.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { MatChipsModule } from '@angular/material/chips';
import { InputOptionsModule } from './modules/input-options/input-options.module';
import { DataModule } from './modules/data/data.module';
import { FilterReducer } from './store/filter-store/filterReducer';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { DataEffectsReducer } from './store/dataEffectsReducer';
import { DataEffects } from './store/dataEffects';
import { NavigationRoutingModule } from './navigation/navigation-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MatChipsModule,
    InputOptionsModule,
    DataModule,
    MatButtonModule,
    HttpClientModule,
    NavigationRoutingModule,
    StoreModule.forRoot({
      FilterReducer: FilterReducer,
      DataEffectsReducer: DataEffectsReducer,
    }),
    EffectsModule.forRoot([DataEffects])
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    DataEffectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
