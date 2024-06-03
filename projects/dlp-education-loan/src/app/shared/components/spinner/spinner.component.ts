import { Component, Input } from '@angular/core';
import { EnvironmentService } from '@el-environments/environment.service';


@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  @Input() message = '';
  constructor(public environmentService: EnvironmentService) { }

}
