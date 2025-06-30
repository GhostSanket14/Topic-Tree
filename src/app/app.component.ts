import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  popupFlag = false;

  ngOnInit(): void {
    console.log(this.popupFlag);
  }

  doChanges(EmittedChange: { field: string, event: Event, dataDump: any}){
    switch (EmittedChange.field){
      case 'popupGeneric':
        this.togglePopup();
      break;
    }
  }

  togglePopup(){
    this.popupFlag = !this.popupFlag;
  }
}

