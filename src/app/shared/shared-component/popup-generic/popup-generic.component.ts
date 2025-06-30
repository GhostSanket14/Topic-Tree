import { Component, Input, OnInit, Output, TemplateRef, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup-generic',
  templateUrl: './popup-generic.component.html',
  styleUrls: ['./popup-generic.component.scss']
})
export class PopupGenericComponent implements OnInit {

  @Input('popupTitle') popup: string = 'Topic Tree';
  @Input('templete') templete!: TemplateRef<any>;
  @Input('popupToggle') popupToggle!: boolean;
  @Output() ChildCd = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  ChildChanged(field: string, event: Event,emitFlag: boolean, dataDump: any = ''){
    if (emitFlag){
      this.ChildCd.emit({ field, event, dataDump });
    }else{
      // Run child code.     
    }
  }
}
