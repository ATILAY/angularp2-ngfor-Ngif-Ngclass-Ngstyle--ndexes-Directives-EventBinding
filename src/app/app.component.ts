import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameWas = '' ;
  reseted = false;
  resetClicked(){
    this.usernameWas = this.username ;
    this.username = '';
    this.reseted = true;

  }
}
