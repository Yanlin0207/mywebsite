import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeMenuComponent } from './resume-menu/resume-menu.component';

const routes: Routes = [
  {
    path: "",
    component: ResumeMenuComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeRoutingModule { }
