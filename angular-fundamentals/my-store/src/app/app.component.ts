import { Component } from '@angular/core';
import { Product } from './product.module';

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
  names: string[] = ['Nico', 'Julio', 'Laura'];
  newName = '';
  emojis = ['😂', '🐦', '🐳', '🌮', '💚'];
  newEmoji = '';
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg',
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg',
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg',
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg',
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg',
    },
  ];

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

  addName() {
    this.names.push(this.newName);
    this.newName = ''; //once added to array clean input field
  }
  removeName(index: number) {
    this.names.splice(index, 1);
  }

  addEmoji() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }
  removeEmoji(index: number) {
    this.emojis.splice(index, 1);
  }
}
