import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { HeaderLogoutComponent } from "./general/Head/header/header-logout/header-logout.component";
import { ScriptLoaderServiceService } from './test/script-loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NikahForever';
  isLoggedIn = false;
  constructor(private scriptLoader: ScriptLoaderServiceService,private dialog: MatDialog,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit() {
    this.scriptLoader.loadScripts([
      'assets/theme/vendor/jquery/jquery.js',
      'assets/theme/vendor/bootstrap/js/bootstrap.bundle.js',
      'assets/theme/vendor/jquery-easing/jquery.easing.js',
      'assets/theme/js/sb-admin-2.js'
    ]).then(() => {
      this.isLoggedIn = this.authService.isLoggedIn();
      console.log('All scripts loaded successfully');
    }).catch(error => {
      console.error(error);
    });
  }
}