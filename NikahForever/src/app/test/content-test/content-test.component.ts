import { Component, OnInit } from '@angular/core';
import { PageHeadComponent } from "../page-head/page-head.component";
import { ContentRowFirstComponent } from "../content-row-first/content-row-first.component";
import { ContentRowSecondComponent } from "../content-row-second/content-row-second.component";
import { ContentRowThirdComponent } from "../content-row-third/content-row-third.component";
import { ScriptLoaderServiceService } from '../script-loader-service.service';

@Component({
  selector: 'app-content-test',
  standalone: true,
  imports: [PageHeadComponent, ContentRowFirstComponent, ContentRowSecondComponent, ContentRowThirdComponent],
  templateUrl: './content-test.component.html',
  styleUrl: './content-test.component.css'
})
export class ContentTestComponent  implements OnInit {
  constructor(private scriptLoader: ScriptLoaderServiceService) {}
  
  ngOnInit() {
    this.scriptLoader.loadScripts([
      'assets/theme/vendor/jquery/jquery.js',
      'assets/theme/vendor/bootstrap/js/bootstrap.bundle.js',
      'assets/theme/vendor/jquery-easing/jquery.easing.js',
      'assets/theme/js/sb-admin-2.js'
    ]).then(() => {
      console.log('All scripts loaded successfully');
    }).catch(error => {
      console.error(error);
    });
  }
}
