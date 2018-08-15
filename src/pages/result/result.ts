import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Chart } from 'chart.js';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
  @ViewChild('resultCanvas') public resultCanvas: ElementRef;
  public radarChart: any;
  public result: {
    category: string,
    marks: number
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _screenOrientation: ScreenOrientation) {
    this.result = this.navParams.data.result;
  }

  ionViewDidEnter () {
    this._screenOrientation.unlock();
    this._screenOrientation.lock(this._screenOrientation.ORIENTATIONS.LANDSCAPE_PRIMARY);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ResultPage');
    this.radarChart = new Chart(this.resultCanvas.nativeElement, {
      type: 'radar',
      data: {
        labels: this.result.map(el => el.category),
        datasets: [{
          label: "得分雷达图",
          data: this.result.map(el => el.marks),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
        }]
      },
      options: {
        legend: {
            labels: {
              fontSize: 14,
              fontStyle: 'bold'
            }
        },
        scale: {
          pointLabels: {
            fontSize: 14
          },
          ticks: {
            beginAtZero: true,
            max: 10,
            min: 0,
            display: false
          }
        }
      }
    });
  }

}
