import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from './master.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'provvy';

  constructor(public route: ActivatedRoute, public master: MasterService) {
  }
}
