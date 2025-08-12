import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.css']
})
export class MemeGeneratorComponent implements OnInit {
  imageUrl: string = 'https://imgflip.com/s/meme/Two-Buttons.jpg';
  topText: string = 'Interpolation ou liaison de propriété ';
  bottomText: string = 'Interpolation ou liaison d\'événement ?';

  constructor() { }

  ngOnInit() {
  }

}
