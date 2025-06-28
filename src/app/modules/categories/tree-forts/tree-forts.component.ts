import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tree-forts',
  templateUrl: './tree-forts.component.html',
  styleUrls: ['./tree-forts.component.scss']
})
export class TreeFortsComponent implements OnInit {

  categoryData : any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('assets/generator/dashboardMaster.json').subscribe(data=>{
      const categoryMaster = data.find(item => item.id === 'DbCategories');
      this.categoryData = (categoryMaster.value).find((item: { caterogyTitle: any; }) => item.caterogyTitle === 'Forts');
    });
    document.documentElement.style.setProperty('--btn-color','#34495e');
  }


}
