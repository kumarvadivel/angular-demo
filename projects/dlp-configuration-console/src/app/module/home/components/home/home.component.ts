import { Component, OnInit } from '@angular/core';
import { RoutesList, pageConfig } from '../../shared/utils/homeConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pageConfig  = pageConfig
  routes = RoutesList
  constructor(private route:Router) { }

  ngOnInit(): void {
  }


  routetoPage(route){
    this.route.navigateByUrl(route.url)
  }

}
