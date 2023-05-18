import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  id = 0
  title = ''
  description = ''
  intro_video = false

  data = [
    {
      id: '0',
      title: '設備資訊管理平台',
      src: '../../../assets/eim/eim-banner.png',
      description: '◎ 整體系統 : 參與部分功能發想規劃。\n◎ UI/UX : 參與架構規劃。\n◎ 前端 : 前端架構規劃設計、API串接資料設計、實作頁面。\n◎ 前端實作項目 : 機台、表單設計、派工、戰情看板-機台詳細資訊、戰情看板-全球概況、報表-DI曝光頭模組狀態、報表-機台總覽、系統-Tag。\n◎ API實作項目 : 派工-工作排程(mobile)、報表-DI曝光頭模組狀態。\n◎ 專案位置 : 現場DEMO。 ',
      intro: [
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/1.PNG',
          text: '自由的表單設計，客製自己想要的欄位樣式。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/2.PNG',
          text: '各模組狀態清楚明瞭。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/3.PNG',
          text: '詳細列出機台欄位資訊。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/4.PNG',
          text: '視覺化圖表及原始資料查看。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/5.PNG',
          text: '視覺化概況。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/eim/6.png',
          text: 'RWD行動裝置版本。'
        }
      ],
      intro_video: false,
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
    },
    {
      id: '1',
      title: '戰情看板',
      src: '../../../assets/eim/eim-banner.png',
      description: '◎ UI/UX : 參與部分設計。\n◎ 前端 : API串接資料設計、實作頁面。\n',
      intro: [
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/chitec/1.PNG',
          text: '所有設備狀況一目瞭然，發生警報的設備隨時能在上方看見。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/chitec/2.PNG',
          text: '各設備詳細運作狀況，發生警報的設備會顯示在最上方和側邊選單。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/chitec/3.PNG',
          text: '設備數據折線圖。'
        },
      ],
      intro_video: true,
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
          name: 'Echarts',
          src: 'echarts.png'
        },
        {
          name: 'Lodash',
          src: 'lodash.png'
        },
        {
          name: 'Git',
          src: 'git.webp'
        },
      ],
    },
    {
      id: '2',
      title: '設備建康管理',
      src: '../../../assets/eim/eim-banner.png',
      description: '◎ 整體系統 : 參與部分功能發想規劃。\n◎ UI/UX : 設計執行。\n◎ 前端 : API串接資料設計、實作頁面。\n',
      intro: [
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/ehm/1.png',
          text: '單一設備監控狀況，提供圖表切換資料切換。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/ehm/2.PNG',
          text: '彈性設定圖表臨界值。'
        },
        {
          src: 'https://yanlin0207.github.io/mywebsite/assets/ehm/3.png',
          text: '單一設備的即時影像及監控狀況。'
        },
      ],
      intro_video: false,
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
          name: 'video.js',
          src: 'videojs.png'
        },
        {
          name: 'Echarts',
          src: 'echarts.png'
        },
        {
          name: 'Git',
          src: 'git.webp'
        },
      ],
    }
  ]

  constructor(
    private _aRoute: ActivatedRoute, private _sanitizer: DomSanitizer
  ) {
  }

  ngOnInit() {
    this._aRoute.paramMap.subscribe((v: any) => {
      this.id = Number(v.params.id);
    });

    this.title = this.data[this.id].title
    this.intro_video = this.data[this.id].intro_video
    this.description = this.data[this.id].description
  }
}
