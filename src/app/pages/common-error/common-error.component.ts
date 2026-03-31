import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-common-error',
  templateUrl: './common-error.component.html',
  styleUrls: ['./common-error.component.scss']
})

export class CommonErrorComponent implements OnInit {

  @Input('errorMsg') errorMsg: string = "Page you are looking for is not found";
  @Input('dottedText') dottedText: string = "404";
  @Input('dottedTextSize') dottedTextSize: string = '210';


  constructor() { }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--dottedTextSize', this.dottedTextSize + 'px');
  }

}
