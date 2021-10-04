import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Camilla'; //public by default
  age: number = 23;
  img: string = 'https://source.unsplash.com/random'; //‘https://www.w3schools.com/howto/img_avatar.png’
}
