import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-tree-forts',
  templateUrl: './tree-category.component.html',
  styleUrls: ['./tree-category.component.scss']
})
export class TreeCategoryComponent implements OnInit {

  RequestCategory: string = "Forts";
  loading: boolean = false;
  categoryData: any = [];

  constructor(private http: HttpClient, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {

    this.loading = true;

    this._route.queryParamMap.subscribe(params => {
      const title = params.get('title');
      console.log(title);
      if (title != null && title != undefined && title != '') {
        this.RequestCategory = String(title);
      }
    });

    this.http.get<any[]>('assets/generator/dashboardMaster.json').subscribe(data => {
      const categoryMaster = data.find(item => item.id === 'DbCategories');
      this.categoryData = (categoryMaster.value).find((item: { caterogyTitle: any; }) => item.caterogyTitle === this.RequestCategory);
    });
    document.documentElement.style.setProperty('--btn-color', '#34495e');

  }

  ngAfterViewInit(): void {
    this.loading = false;    
    
  }

  navigate(engine: string) {
    var builderEngineName = "";
    switch (engine) {
      case 'Forts':
        console.log("In this");
        builderEngineName = '../forts-engine';
        break;
      case 'Forests':
        builderEngineName = '../forests-engine';
        break;

    }
    console.log(this._router.navigate([builderEngineName], { relativeTo: this._route }));
    this._router.navigate([builderEngineName], { relativeTo: this._route });
  }
}
