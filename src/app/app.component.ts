import { Component } from '@angular/core';
import { DashboardComponentComponent } from './components/dashboard-component/dashboard-component.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponentComponent,HeaderComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'charts';
}
