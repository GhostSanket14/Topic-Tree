import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tree-forts',
  templateUrl: './tree-category.component.html',
  styleUrls: ['./tree-category.component.scss']
})
export class TreeCategoryComponent implements OnInit {

  RequestCategory: string = "Forts"; // hard coded for now. Later will be decided based on what we click on Dashboard
  categoryData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/generator/dashboardMaster.json').subscribe(data => {
      const categoryMaster = data.find(item => item.id === 'DbCategories');
      this.categoryData = (categoryMaster.value).find((item: { caterogyTitle: any; }) => item.caterogyTitle === this.RequestCategory);
    });
    document.documentElement.style.setProperty('--btn-color', '#34495e');
  }


}
