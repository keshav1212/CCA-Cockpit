import { Component } from '@angular/core';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  faDashboard=faDashboard;

}
