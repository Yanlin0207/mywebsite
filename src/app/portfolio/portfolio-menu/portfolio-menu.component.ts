import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu',
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.scss']
})
export class PortfolioMenuComponent {
  data = [
    {
      id: 0,
      title: '設備資訊管理平台',
    },
    {
      id: 1,
      title: '戰情看板',
    },
    {
      id: 2,
      title: '自動化管理系統',
    }
  ]


}
