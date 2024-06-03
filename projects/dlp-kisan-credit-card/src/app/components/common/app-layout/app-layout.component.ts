import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from '@kcc-app/services/common-variable-service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: []
})
export class AppLayoutComponent {

  constructor(private router:Router,public commonVariableService:CommonVariableService) { }

  savingsInfo(){
    this.router.navigateByUrl(`savings`);
    
  
  }

}
