import { Component } from '@angular/core';

import mixpanel from 'mixpanel-browser';
import { MixpanelServiceService } from 'src/app/mixpanel-service.service';



@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})

export class SidenavbarComponent {
   constructor(private mixpanelService : MixpanelServiceService){
    mixpanel.init('11b25c9684cd81a697eb5776a555af3e');
   }
  
   onStoryboardClick() {
    this.mixpanelService.track("Storyboard Clicked");
    console.log('storyboardclicked')
  }
}
