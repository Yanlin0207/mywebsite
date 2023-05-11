import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  id=0
  title = ''

  data = [
    {
      id: '0',
      title: '設備資訊管理平台',
      src:'../../../assets/eim/eim-banner.png',
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
      ]
    }
  ]

  constructor(
    private _aRoute: ActivatedRoute,
  ) {

    console.log("hi")
  }

  ngOnInit() {
    this._aRoute.paramMap.subscribe((v:any) => {
      this.id = Number(v.params.id);
     });

     this.title=this.data[this.id].title
  }
}
