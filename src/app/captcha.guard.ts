import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {CaptchaStateService} from './captcha-state.service';

export const captchaGuard: CanActivateFn = (route, state) => {
  const captchaService = inject(CaptchaStateService)
  const router = inject(Router)
  let currentLevel;
  captchaService.currentLevel.subscribe(level => currentLevel=level)
  if (currentLevel!=5) router.navigate(['captcha'])
  return true;
};
