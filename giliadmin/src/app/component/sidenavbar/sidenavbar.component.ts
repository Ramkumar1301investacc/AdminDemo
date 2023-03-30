import { Component } from '@angular/core';

import mixpanel from 'mixpanel-browser';



@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.css']
})

export class SidenavbarComponent {
  ngOnInit() {
    mixpanel.init("11b25c9684cd81a697eb5776a555af3e");
  }
  
  onStoryboardClick() {
    mixpanel.track("Storyboard Clicked");
    console.log('storyboardclicked')
  }
}
