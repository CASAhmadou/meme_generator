import { Component } from '@angular/core';
import { Meme } from './models/meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  image: string = 'https://imgflip.com/s/meme/Two-Buttons.jpg';
  haut: string = 'Interpolation ou liaison de propriété ';
  bas: string = 'Interpolation ou liaison d\'événement ?';

  listeMemes: Meme[] = [];
  ajouterMeme(meme: Meme) {
    this.listeMemes.push(meme);
  }

  faireLaSelection($event: Meme) {
    this.image = $event.imageUrl;
    this.haut = $event.topText;
    this.bas = $event.bottomText;
  }
}
