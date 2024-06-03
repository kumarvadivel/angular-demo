import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from '@ssa-app/services/common-variable-service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent  {
  @Input() breadCrumbList = [];
  constructor(private commonVariableService:CommonVariableService,public router: Router) { }
 
  navigateTo(item) {
    this.router.navigateByUrl(item.url);
  }
}
