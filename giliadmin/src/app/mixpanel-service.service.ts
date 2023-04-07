import { Injectable } from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Injectable({
  providedIn: 'root'
})
export class MixpanelServiceService {

  constructor() { }
  init(userToken: string): void {
    mixpanel.init('11b25c9684cd81a697eb5776a555af3e');
    mixpanel.identify(userToken);
}
track(id: string, action: any = {}): void {
  mixpanel.track(id, action);
  }   
}