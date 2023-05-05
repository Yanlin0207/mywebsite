import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { PortfolioWrapComponent } from './portfolio-wrap/portfolio-wrap.component';

const routes: Routes = [
  {
    path: "",
    component: PortfolioWrapComponent,
    children: [
      { path: "", pathMatch: "full", redirectTo: "portfolio-menu" },
      {
        path: "portfolio-menu",
        component: PortfolioMenuComponent,
      },
      {
        path: "portfolio-menu/case",
        component: PortfolioDetailComponent,
      },
      { path: "**", redirectTo: "portfolio-menu", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
