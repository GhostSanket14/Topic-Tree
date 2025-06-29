import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-popup-generic',
  templateUrl: './popup-generic.component.html',
  styleUrls: ['./popup-generic.component.scss']
})
export class PopupGenericComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input('popupTitle') popup: string = 'Topic Tree';
  @Input('templete') templete!: TemplateRef<any>;
  PopupFlag: boolean = false;

  toggleAbout() {
    this.PopupFlag = !this.PopupFlag;
  }

}
