import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Camilla'; //public by default
  age: number = 23;
  img: string = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };
  toogleBtn() {
    this.btnDisabled = this.btnDisabled ? false : true;
    /* this.btnDisabled = !this.btnDisabled */
  }
  increaseAgeBtn() {
    this.person.age++;
    /* this.person.age += 1; */
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop); //in with position is scroll
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
