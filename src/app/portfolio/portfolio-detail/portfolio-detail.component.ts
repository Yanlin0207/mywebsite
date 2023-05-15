import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  id = 0
  title = ''
  description=''

  data = [
    {
      id: '0',
      title: '設備資訊管理平台',
      src: '../../../assets/eim/eim-banner.png',
      description:'整體系統 : 參與部分功能發想規劃。\nUI/UX : 參與架構規劃。\n前端 : 前端架構規劃設計、API串接資料設計、實作頁面。\n前端實作項目 : 機台、表單設計、派工、戰情看板-機台詳細資訊、戰情看板-全球概況、報表-DI曝光頭模組狀態、報表-機台總覽、系統-Tag。\n後端實作項目 : 派工-工作排程(mobile)、報表-DI曝光頭模組狀態。',
      intro: [
        {
          src: '../../../assets/eim/1.PNG',
          text: '自由的表單設計，客製自己想要的欄位樣式。'
        },
        {
          src: '../../../assets/eim/2.PNG',
          text: '各模組狀態清楚明瞭。'
        },
        {
          src: '../../../assets/eim/3.PNG',
          text: '詳細列出機台欄位資訊。'
        },
        {
          src: '../../../assets/eim/4.PNG',
          text: '視覺化圖表及原始資料查看。'
        },
        {
          src: '../../../assets/eim/5.PNG',
          text: '視覺化概況。'
        },
        {
          src: '../../../assets/eim/6.png',
          text: 'RWD行動裝置版本。'
        }
      ],
      tools: [
        {
          name: 'Angular',
          src: 'angular.webp'
        },
        {
          name: 'Typescript',
          src: 'typescript.webp'
        },
        {
          name: 'Jquery',
          src: 'jquery.png'
        },
        {
          name: 'Html5',
          src: 'html5.webp'
        },
        {
          name: 'Sass',
          src: 'sass.webp'
        },
        {
          name: 'Bootstrap',
          src: 'bootstrap.webp'
        },
        {
          name: 'Bootswatch',
          src: 'bootswatch.png'
        },
        {
          name: 'Leaflet',
          src: 'leaflet.png'
        },
        {
          name: 'Echarts',
          src: 'echarts.png'
        },
        {
          name: 'Swal2',
          src: 'swal2.png'
        },
        {
          name: 'Formio',
          src: 'formio.png'
        },
        {
          name: 'Node Red',
          src: 'node-red.png'
        },
        {
          name: 'PostgreSQL',
          src: 'postgreSQL.png'
        },
        {
          name: 'Git',
          src: 'git.webp'
        },
      ],
    }
  ]

  constructor(
    private _aRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this._aRoute.paramMap.subscribe((v: any) => {
      this.id = Number(v.params.id);
    });

    this.title = this.data[this.id].title
    this.description=this.data[this.id].description
  }
}
