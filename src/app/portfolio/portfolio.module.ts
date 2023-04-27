import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';


@NgModule({
  declarations: [
    PortfolioDetailComponent,
    PortfolioMenuComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
