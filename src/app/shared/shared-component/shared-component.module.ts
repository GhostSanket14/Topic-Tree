import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingEffectComponent } from './loading-effect/loading-effect.component';
import { PopupGenericComponent } from './popup-generic/popup-generic.component';



@NgModule({
  declarations: [
    LoadingEffectComponent,
    PopupGenericComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingEffectComponent,
    PopupGenericComponent,
  ]
})
export class SharedComponentModule { }
