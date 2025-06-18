import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  imageSource: string = '';
  imageAlternate: string = 'No config applied';

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      switch (data.errorType){
        case '404':
          this.imageSource = 'assets/images/404 not found.jpg';
          this.imageAlternate = '404 Page not found (Image)'
        break;
      }
    });
  }

}
