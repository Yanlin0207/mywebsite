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
  {
    path: "profile-menu",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "resume-menu",
    loadChildren: () =>
      import("./resume/resume.module").then((m) => m.ResumeModule),
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
