import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeRoutingModule } from './resume-routing.module';
import { ResumeMenuComponent } from './resume-menu/resume-menu.component';


@NgModule({
  declarations: [
    ResumeMenuComponent
  ],
  imports: [
    CommonModule,
    ResumeRoutingModule
  ]
})
export class ResumeModule { }
