import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "portfolio",
    loadChildren: () =>
      import("./portfolio/portfolio.module").then((m) => m.PortfolioModule),
  },
  {
    path: "",
    redirectTo: "portfolio",
    pathMatch: "full",
  },
  // {
  //   path: "profile",
  //   loadChildren: () =>
  //     import("./profile/profile.module").then((m) => m.ProfileModule),
  // },
  // {
  //   path: "resume",
  //   loadChildren: () =>
  //     import("./resume/resume.module").then((m) => m.ResumeModule),
  // },
  { path: "**", redirectTo: "portfolio", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules,//預載
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
