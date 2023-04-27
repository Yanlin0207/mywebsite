import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "portfolio-menu",
    loadChildren: () =>
      import("./portfolio/portfolio.module").then((m) => m.PortfolioModule),
  },
  {
    path: "",
    redirectTo: "portfolio-menu",
    pathMatch: "full",
  },
  { path: "**", redirectTo: "portfolio-menu", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,//預載
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
