import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Meme } from '../../models/meme';
import { MemeViewerComponent } from '../meme-viewer/meme-viewer.component';

@Component({
  selector: 'app-meme-generator',
  templateUrl: './meme-generator.component.html',
  styleUrls: ['./meme-generator.component.css']
})
export class MemeGeneratorComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() topText!: string;
  @Input() bottomText!: string;

  @Output() ajout: EventEmitter<Meme> = new EventEmitter();

  @ViewChild('child') viewer!: MemeViewerComponent;
  signalerAjout() {
    const newMeme: Meme = {
      id: Date.now(),
      imageUrl: this.imageUrl,
      topText: this.topText,
      bottomText: this.bottomText
    };
    this.ajout.emit(newMeme);
  }

  saveMemo() {
    if(!this.viewer) {
      console.error('Viewer not available');
      return;
    }
    this.viewer.takeScreenshot();
  }

  constructor() { }

  ngOnInit() {
  }
}
