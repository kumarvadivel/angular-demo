import { Component, Input } from '@angular/core'; 
import { EnvironmentService } from '@sba-environments/environment.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() message = '';
  constructor(public environmentService:EnvironmentService) { }
}
