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
      src:'https://yanlin0207.github.io/mywebsite/assets/eim/eim-cover.png'
    },
    {
      id: '1',
      title: '戰情看板',
      src:'https://yanlin0207.github.io/mywebsite/assets/chitec/chitec-cover.png'
    },
    {
      id: '2',
      title: '設備建康管理',
      src:'https://yanlin0207.github.io/mywebsite/assets/ehm/ehm-cover.png'
    }
  ]


}
