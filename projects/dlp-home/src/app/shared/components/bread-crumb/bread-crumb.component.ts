import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from '@home-app/services/common-variable.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  @Input() breadCrumbList = [];
  constructor(private commonVariableService:CommonVariableService,public router: Router) { }

  ngOnInit(): void {
  //  this.breadCrumbList = this.commonVariableService.breadCrumbList;
  }

  navigateTo(item) {
    this.router.navigateByUrl(item.url);
  }
}
