import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'topic-tree';
  AboutPopup: boolean = false;

  toggleAbout(){
    this.AboutPopup = !this.AboutPopup;
  }

}

