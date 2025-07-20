import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-effect',
  templateUrl: './loading-effect.component.html',
  styleUrls: ['./loading-effect.component.scss']
})
export class LoadingEffectComponent implements OnInit {

  @Input('loaderType') loader: string = 'load';

  constructor() { }

  ngOnInit(): void {
  } 
}