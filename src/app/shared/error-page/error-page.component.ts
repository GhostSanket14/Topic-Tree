import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const errorType = this.route.snapshot.data['errType'];

  }

}
