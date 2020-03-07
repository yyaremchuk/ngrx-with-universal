import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromApp from './+state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './+state/app.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromApp.appFeatureKey, fromApp.reducer),
    EffectsModule.forFeature([AppEffects])
  ]
})
export class AppStoreModule {}
