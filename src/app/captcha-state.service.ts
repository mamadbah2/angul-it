import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptchaStateService {
  private initLevel = parseInt(localStorage.getItem("captcha-level") || "0", 10)
  private levelSource = new BehaviorSubject<number>(this.initLevel);
  currentLevel = this.levelSource.asObservable()

  constructor() {
    this.currentLevel.subscribe(level => {
      localStorage.setItem("captcha-level", level.toString())
    })
  }

  changeLevel(level: number) {
    this.levelSource.next(level)
  }
}
