import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptchaStateService {
  private initLevel = parseInt(localStorage.getItem("captcha-level") || "0", 10)
  private initTime:number = parseInt(localStorage.getItem("captcha-time") || "0")
  private levelSource = new BehaviorSubject<number>(this.initLevel);
  private timeSource = new BehaviorSubject<number>(this.initTime)
  currentLevel = this.levelSource.asObservable()

  constructor() {
    this.currentLevel.subscribe(level => {
      localStorage.setItem("captcha-level", level.toString())
    })
    this.timeSource.asObservable().subscribe(time => {
      localStorage.setItem("captcha-time", time.toString())
    })
  }

  changeLevel(level: number) {
    this.levelSource.next(level)
  }

  timer() {
   return  setInterval(()=> this.timeSource.next(this.timeSource.getValue()+1), 1000)
  }

  resetTimer() {
    this.timeSource.next(0)
  }

  getTimeSource() {
    return this.timeSource
  }

}
