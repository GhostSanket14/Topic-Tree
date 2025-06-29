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
  loading : boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  closeDrawer() {
    this.drawer.close();
  }
  searchList(event : Event){
    const val = (event.target as HTMLInputElement).value;
    
  }
}
