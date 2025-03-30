import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestContentRoutingModule } from './test-content-routing.module';
import { PageHeadComponent } from '../page-head/page-head.component';
import { ContentRowFirstComponent } from '../content-row-first/content-row-first.component';
import { ContentRowSecondComponent } from '../content-row-second/content-row-second.component';
import { ContentRowThirdComponent } from '../content-row-third/content-row-third.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
      PageHeadComponent, 
      ContentRowFirstComponent, 
      ContentRowSecondComponent, 
      ContentRowThirdComponent,
      TestContentRoutingModule
    ],
    exports: [PageHeadComponent, ContentRowFirstComponent, ContentRowSecondComponent, ContentRowThirdComponent],
})
export class TestContentModule { }
