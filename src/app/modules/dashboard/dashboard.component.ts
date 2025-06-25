import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  masterData: any;
  cardsData : any[] = [];
  bgImage: string = "";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/global/dashboardMaster.json').subscribe(data => {
      const dbCardsObj = data.find(item => item.id === 'DbCards');
      this.cardsData = dbCardsObj.value;
      console.log(this.cardsData);
    })
  }



  configurationSetting(cardTitle : String, openCard : boolean = false): void {
    switch (cardTitle){
      case "Forts":
        for(const card of this.cardsData){
          if (card.cardTitle === "Forts"){
            this.bgImage = card.bgImage;
          }
        }
      break;
      case 'Forests':
        for (const card of this.cardsData) {
          if (card.cardTitle === "Forests") {
            this.bgImage = card.bgImage;
          }
        }
      break;

      case 'default':
        document.documentElement.style.setProperty('--main-bgcolor', '#ffffff');
        break;
    }
  }
}