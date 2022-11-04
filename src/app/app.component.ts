import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message = 'ng-animations message';
  isShowMessage: boolean;

  openModalMessage(){
    this.isShowMessage = true;
  }
  closeModalMessage(){
    this.isShowMessage = false;
  }
}
