import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cardsData : any[] = [];
  bgImage: string = "";
  loading : boolean = false;


  constructor(private http: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/generator/dashboardMaster.json').subscribe(data => {
      const dbCardsObj = data.find(item => item.id === 'DbCards');
      this.cardsData = dbCardsObj.value;
      console.log(this.cardsData);
    })
  }



  configurationSetting(cardTitle : String, openCard : boolean = false): void {
    this.loading = true;
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
    this.loading = false;
  }

  navigate(cardTitle: String){
    switch (cardTitle){
      case 'Forts':
        this._router.navigate(['/category-root', ]);
        break;
      case 'Forests':

        break;
      case 'Weapons':

        break;
    }
  }
}