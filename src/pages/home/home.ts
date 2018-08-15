import { Component } from '@angular/core';
// import { IonicPage } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { QuestionnareInstances } from '../../utils/questions';
import { ResultPage } from '../result/result';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

// @IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private _questions: QuestionnareInstances;
  public currentQuestion: {
    question: string,
    mark: number,
    category: string
  }

  public categoryMarks: {
    category: string,
    marks: number
  }[];

  public count = 0;

  constructor(public navCtrl: NavController, private _screenOrientation: ScreenOrientation) {
    this._questions = new QuestionnareInstances();
    this.categoryMarks = [];
    this.gotoNext();
  }

  ionViewDidEnter () {
    this._screenOrientation.unlock();
    this._screenOrientation.lock(this._screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
  }

  public gotoNext() {
    if (this._questions.hasNext()) {
      this.currentQuestion = this._questions.next();
      this.count++;
    } else {
      this.navCtrl.push(ResultPage, {
        result: this.categoryMarks
      }).then(() => {
        this.categoryMarks = [];
        this.currentQuestion = this._questions.next();
        this.count = 1;
      });
    }
  }

  public clickOnYes() {
    this.clickOn(true);
  }

  public clickOnNo() {
    this.clickOn(false);
  }

  public clickOn(answer: boolean) {
    const exist = this.categoryMarks.find(el => el.category === this.currentQuestion.category);
    if (exist) {
      exist.marks += answer ? this.currentQuestion.mark : 0;
    } else {
      this.categoryMarks.push({
        category: this.currentQuestion.category,
        marks: answer ? this.currentQuestion.mark : 0
      });
    }
    this.gotoNext();
  }
}
