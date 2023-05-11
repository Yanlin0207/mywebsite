import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-menu',
  templateUrl: './portfolio-menu.component.html',
  styleUrls: ['./portfolio-menu.component.scss']
})
export class PortfolioMenuComponent {
  data = [
    {
      id: '0',
      title: '設備資訊管理平台',
      src:'../../../assets/eim/eim-cover.png'
    },
    {
      id: '1',
      title: '戰情看板',
      src:'../../../assets/chitec/chitec-cover.png'
    },
    {
      id: '2',
      title: '自動化管理系統',
      src:'../../../assets/malink/malink-cover.png'
    }
  ]


}
