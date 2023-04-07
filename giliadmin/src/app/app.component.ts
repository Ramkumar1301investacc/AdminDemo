import { Component ,OnInit} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta) { }

  ngOnInit() {
    this.meta.addTag({ name: 'Content-Security-Policy', content: "connect-src 'self' cognito-identity.amazonaws.com" });
  }

}