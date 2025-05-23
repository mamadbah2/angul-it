import { Component } from '@angular/core';
import {CaptchaLevelComponent} from "../captcha-level/captcha-level.component";
import {CaptchaStateService} from '../captcha-state.service';
import {Subscription} from 'rxjs';
import {NgIf} from '@angular/common';
import {CaptchaSolveComponent} from '../captcha-solve/captcha-solve.component';

@Component({
  selector: 'app-captcha',
  imports: [
    CaptchaLevelComponent,
    NgIf,
    CaptchaSolveComponent
  ],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent {
  currentLevel :number = 0
  levelSubscription: Subscription | undefined;
  allTitre: string[]= ["Emoji", "Fire", "Cat"]
  currentTitre :string = this.allTitre[this.currentLevel]
  allCorrectResponses :number[][] = [[2,3,4,6,7,8,10,11,12], [5,6,7,10,12], [5,6,7,9,11]]
  correctResponses :number[] = this.allCorrectResponses[this.currentLevel]

  constructor(private captchaStateService: CaptchaStateService) {
  }

  ngOnInit():void {
    this.levelSubscription = this.captchaStateService.currentLevel.subscribe(level => {
      this.currentLevel = level
      this.currentTitre = this.allTitre[level]
      this.correctResponses = this.allCorrectResponses[level]
    })
  }

  nextLevel(isSuccess: boolean) {
    if (isSuccess) {
      this.captchaStateService.changeLevel(this.currentLevel+1)
      if (this.currentLevel < this.allTitre.length) {
        this.correctResponses = this.allCorrectResponses[this.currentLevel]
        this.currentTitre = this.allTitre[this.currentLevel]
      } else {
        alert("congratulation")
      }
    }
  }

  backLevel(isBack: boolean) {
    if (isBack && this.currentLevel > 0)  {
      this.currentLevel--
      this.correctResponses = this.allCorrectResponses[this.currentLevel]
      this.currentTitre = this.allTitre[this.currentLevel]
    } else {
      alert("You're on the first level my bro !! " +
        "Don't touch again !!")
    }
  }

  ngDestroy(): void {
    if (this.levelSubscription) {
      this.levelSubscription.unsubscribe();
    }
  }

}
