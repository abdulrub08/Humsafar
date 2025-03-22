import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { GeneralModule } from './general/general.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,GeneralModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NikahForever';
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['name'] && params['email']) {
        localStorage.setItem('user', JSON.stringify(params));
        this.router.navigate(['/dashboard']); // Redirect to dashboard after login
      }
    });
  }
}
