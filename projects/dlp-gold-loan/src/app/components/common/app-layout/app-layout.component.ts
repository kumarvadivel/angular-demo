import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from '../../../services/common-variable-service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {

  constructor(private router:Router,public commonVariableService:CommonVariableService) { }
 
  savingsInfo(){
    this.router.navigateByUrl(`savings`).catch(console.error);
    
  
  }

}
