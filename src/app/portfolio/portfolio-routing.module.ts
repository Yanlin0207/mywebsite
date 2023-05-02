import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioMenuComponent } from './portfolio-menu/portfolio-menu.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';

const routes: Routes = [
  {
    path: "",
    component: PortfolioMenuComponent,
    children: [
      // { path: "", pathMatch: "full", redirectTo: "portfolio-detail" },
      {
        path: "portfolio-detail",
        component: PortfolioDetailComponent,
      },
      // { path: "**", redirectTo: "portfolio-detail", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
