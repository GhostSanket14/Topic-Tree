import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-effect',
  templateUrl: './loading-effect.component.html',
  styleUrls: ['./loading-effect.component.scss']
})
export class LoadingEffectComponent implements OnInit {

  // LOD - loading SER - searching EDT - editing
  @Input('loaderType') loader: string = 'load';


  constructor() { }

  ngOnInit(): void {
  } 
}