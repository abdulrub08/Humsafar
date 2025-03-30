import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentTestComponent } from '../content-test/content-test.component';

const routes: Routes = [
  { 
    path: 'test', 
    component: ContentTestComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestContentRoutingModule { }
