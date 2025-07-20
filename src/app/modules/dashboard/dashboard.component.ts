import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { title } from 'process';

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
        this.bgImage = "";
        break;

    }
    this.loading = false;
  }

  navigate(cardTitle: String){
        this._router.navigate(['../categories/category-root'], { relativeTo: this._route, queryParams: { title: cardTitle }});
  }
}