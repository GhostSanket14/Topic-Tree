import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-tree-forts-builder',
  templateUrl: './tree-forts-builder.component.html',
  styleUrls: ['./tree-forts-builder.component.scss']
})
export class TreeFortsBuilderComponent implements OnInit {
[x: string]: any;

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  loading: boolean = false;
  popupFlag: boolean = false;

  fortList : any = [];
  fortData: any = [];
  DisplayData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<any>('assets/generator/mock/forts-builder.json').subscribe(data=>{
      const fortListObj = data.find((item: { id: string; }) => item.id === 'FortList');
      this.fortList = fortListObj.value;
    });

    this.http.get<any>('assets/generator/mock/forts-builder.json').subscribe(data => {
      const fortListObj = data.find((item: { id: string; }) => item.id === 'FortData');
      this.fortData = fortListObj.value;
      // Loading 1 deafult fort
      this.LoadContentInfo("RaFo01");
    });

  }
  doChanges(payload: { field: string, event: Event, dataDump: any }) {
    switch (payload.field) {
      case 'popupGeneric':
        this.togglePopup();
        break;
    }
  }

  callurl(urlVal : string){
    console.log(urlVal);
    window.open(urlVal);
  }
  searchList(event: Event) {
    const val = (event.target as HTMLInputElement).value;

  }
  LoadContentInfo(ItemId : string){
    this.DisplayData  = this.fortData.find((Data: { id: string }) => 
    { return Data.id === ItemId }
  );
  }



  // Small utility
  closeDrawer() {
    this.drawer.close();
  }
  togglePopup() {
    this.popupFlag = !this.popupFlag;
  }
}
