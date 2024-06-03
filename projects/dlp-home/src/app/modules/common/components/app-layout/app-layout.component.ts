import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonVariableService } from '@home-app/services/common-variable.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {

  constructor(private router: Router,
    public commonVariableService:CommonVariableService) { }

  ngOnInit(): void {
  }

}
