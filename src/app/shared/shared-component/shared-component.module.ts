import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingEffectComponent } from './loading-effect/loading-effect.component';
import { PopupGenericComponent } from './popup-generic/popup-generic.component';
import { OsmMapsComponent } from './osm-maps/osm-maps.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    LoadingEffectComponent,
    PopupGenericComponent,
    OsmMapsComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[
    LoadingEffectComponent,
    PopupGenericComponent,
    OsmMapsComponent
  ]
})
export class SharedComponentModule { }
