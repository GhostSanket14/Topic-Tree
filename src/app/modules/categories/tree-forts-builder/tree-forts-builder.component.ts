import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-tree-forts-builder',
  templateUrl: './tree-forts-builder.component.html',
  styleUrls: ['./tree-forts-builder.component.scss']
})
export class TreeFortsBuilderComponent implements OnInit {

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  loading: boolean = false;
  popupFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }
  doChanges(payload: { field: string, event: Event, dataDump: any }) {
    switch (payload.field) {
      case 'popupGeneric':
        this.togglePopup();
        break;
    }
  }
  searchList(event: Event) {
    const val = (event.target as HTMLInputElement).value;
  }



  closeDrawer() {
    this.drawer.close();
  }
  togglePopup() {
    this.popupFlag = !this.popupFlag;
  }

}
