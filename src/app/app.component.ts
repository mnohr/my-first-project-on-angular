import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project-on-angular :)';
  constructor(){
    setTimeout(()=>{
      this.title = "changed titile";
    }, 2000);
  }
}
