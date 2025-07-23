import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { OsmMapsComponent } from '../../../shared/shared-component/osm-maps/osm-maps.component'

@Component({
  selector: 'app-tree-forts-builder',
  templateUrl: './tree-forts-builder.component.html',
  styleUrls: ['./tree-forts-builder.component.scss']
})
export class TreeFortsBuilderComponent implements OnInit {
  [x: string]: any;

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  @ViewChild(OsmMapsComponent) mapsCompo!: OsmMapsComponent;
  loading: boolean = false;
  popupFlag: boolean = false;
  defaultImage: string = "assets/images/forts/FortDefault.png";

  fortList: any = [];
  fortData: any = [];
  DisplayData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('assets/generator/mock/forts-builder.json').subscribe(data => {
      const fortListObj = data?.find((item: { id: string; }) => item?.id === 'FortList');
      this.fortList = fortListObj?.value?.filter((obj: { visible: boolean; }) => { return obj.visible == true });
    });

    this.http.get<any>('assets/generator/mock/forts-builder.json').subscribe(data => {
      const fortListObj = data?.find((item: { id: string; }) => item?.id === 'FortData');
      this.fortData = fortListObj?.value;
      // Loading 1 deafult fort
      this.LoadContentInfo("RaFo01");
      // this.mapsCompo.searchLocationCall(this.DisplayData?.name);
    });

  }
  // Change Emitter
  doChanges(payload: { field: string, event: Event, dataDump: any }) {
    switch (payload.field) {
      case 'popupGeneric':
        this.togglePopup();
        break;
    }
  }

  // Business logic

  callurl(urlVal: string) {
    console.log(urlVal);
    window.open(urlVal);
  }

  searchList(event: Event) {
    const val = (event.target as HTMLInputElement).value;

  }

  LoadContentInfo(ItemId: string) {
    this.DisplayData = this.fortData.find((Data: { id: string }) => { return Data.id === ItemId }
    );
    // this.mapsCompo.searchLocationCall(this.DisplayData?.name);
  }

  checkArray(val: any): boolean {
    if (Array.isArray(val)) {
      return true;
    } else {
      return false;
    }
  }


  // Small utility
  closeDrawer() {
    this.drawer.close();
  }
  togglePopup() {
    this.popupFlag = !this.popupFlag;
  }
}
