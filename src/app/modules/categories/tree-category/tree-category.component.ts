import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tree-forts',
  templateUrl: './tree-category.component.html',
  styleUrls: ['./tree-category.component.scss']
})
export class TreeCategoryComponent implements OnInit {

  RequestCategory: string = "Forts"; // hard coded for now. Later will be decided based on what we click on Dashboard
  categoryData: any = [];

  constructor(private http: HttpClient, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    const categoryData = this._route.snapshot.paramMap.get('title');
    if (categoryData != null && categoryData != undefined && categoryData != ''){
      this.RequestCategory = String(categoryData);
    }

    this.http.get<any[]>('assets/generator/dashboardMaster.json').subscribe(data => {
      const categoryMaster = data.find(item => item.id === 'DbCategories');
      this.categoryData = (categoryMaster.value).find((item: { caterogyTitle: any; }) => item.caterogyTitle === this.RequestCategory);
    });
    document.documentElement.style.setProperty('--btn-color', '#34495e');
  }


}
