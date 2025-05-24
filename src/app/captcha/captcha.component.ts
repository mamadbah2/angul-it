import { Component } from '@angular/core';
import {CaptchaLevelComponent} from "../captcha-level/captcha-level.component";
import {CaptchaStateService} from '../captcha-state.service';
import {Subscription} from 'rxjs';
import {NgIf} from '@angular/common';
import {CaptchaSolveComponent} from '../captcha-solve/captcha-solve.component';
import {Router} from '@angular/router';

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
  levelSubscription: Subscription | undefined; timeSubscription: Subscription | undefined;
  timer : any;
  allTitre: string[]= ["Emoji", "Fire", "Cat", "Solve math question and enter result below", "To continue, type the word you see in the picture"]
  currentTitre :string = ""
  allCorrectResponses :any[][] = [[2,3,4,6,7,8,10,11,12], [5,6,7,10,12], [5,6,7,9,11], [41], ["DISSECTED"]]
  correctResponses :number[] = []
  widthBar:number = 0
  compteur:number = 0

  constructor(private captchaStateService: CaptchaStateService, private router: Router) {
  }

  ngOnInit():void {
    this.levelSubscription = this.captchaStateService.currentLevel.subscribe(level => {
      this.currentLevel = level
      this.currentTitre = this.allTitre[level]
      this.correctResponses = this.allCorrectResponses[level]
      this.widthBar = (level/this.allTitre.length)*100
    })
    this.timeSubscription = this.captchaStateService.getTimeSource().subscribe(t => {
      this.compteur = t
    })
     this.timer = this.captchaStateService.timer()
  }

  nextLevel(isSuccess: boolean) {
    if (isSuccess) {
      this.captchaStateService.changeLevel(this.currentLevel+1)
      if (this.currentLevel < this.allTitre.length) {
        this.correctResponses = this.allCorrectResponses[this.currentLevel]
        this.currentTitre = this.allTitre[this.currentLevel]
      } else {
        this.captchaStateService.changeLevel(0)
        clearInterval(this.timer)

        this.router.navigate(['/result'])
        alert("Score de : " +
          this.compteur)
        this.captchaStateService.resetTimer() // Apres avoir reset le timer le score revient a 0 aussi parce qu'il y ait connecte
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
    if (this.timeSubscription) {
      this.timeSubscription.unsubscribe()
    }
  }

}
