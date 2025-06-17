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
  allTitre: string[]= ["Emoji", "Fire", "Cat", "Solve math question and enter result below", "To continue, type the word you see in the picture", "Peugeot 206", "Pigeon", "Canard", "Solve math question and enter result below", "To continue, type the word you see in the picture"]
  currentTitre :string = ""
  allCorrectResponses :any[][] = [
    [2,3,4,6,7,8,10,11,12],
    [5,6,7,10,12],
    [5,6,7,9,11],
    [41],
    ["DISSECTED"],
    [1,5,16],
    [5,14],
    [6,8],
    [41],
    ["MORPH"]
  ]
  correctResponses :number[] = []
  widthBar:number = 0
  compteur:number = 0
  totalLevel = 5
  globalSubLevel=Math.floor(Math.random()*2)

  constructor(private captchaStateService: CaptchaStateService, private router: Router) {
  }

  ngOnInit():void {
    this.levelSubscription = this.captchaStateService.currentLevel.subscribe(level => {
      this.currentLevel = level
      this.currentTitre = this.allTitre[level]
      this.correctResponses = this.allCorrectResponses[level+(this.globalSubLevel*this.totalLevel)]
      this.widthBar = (level/5)*100
    })
    this.timeSubscription = this.captchaStateService.getTimeSource().subscribe(t => {
      this.compteur = t
    })
     this.timer = this.captchaStateService.timer()
  }

  nextLevel(isSuccess: boolean) {
    if (isSuccess) {
      this.captchaStateService.changeLevel(this.currentLevel+1)
      if (this.currentLevel < 5) {
        let i = this.currentLevel+(this.globalSubLevel*this.totalLevel)
        this.correctResponses = this.allCorrectResponses[i]
        this.currentTitre = this.allTitre[i]
      } else {
        clearInterval(this.timer)
        this.router.navigate(['/result'])
      }
    }
  }

  backLevel(isBack: boolean) {
    if (isBack && this.currentLevel > 0)  {
      this.currentLevel--
      let i = this.currentLevel+(this.globalSubLevel*this.totalLevel)
      this.correctResponses = this.allCorrectResponses[i]
      this.currentTitre = this.allTitre[i]
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
