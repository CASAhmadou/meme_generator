import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { toPng } from 'html-to-image';

@Component({
  selector: 'app-meme-viewer',
  templateUrl: './meme-viewer.component.html',
  styleUrls: ['./meme-viewer.component.css']
})
export class MemeViewerComponent implements OnInit {
  @Input() imageUrl!: string;
  @Input() topText!: string;
  @Input() bottomText!: string;

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('screenContent') screenContent!: ElementRef;

  takeScreenshot(): void {
    if(!this.screenContent) {
      console.error('Screen content not available');
      return;
    }
    const noeux = this.screenContent.nativeElement;
    toPng(noeux).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = this.topText + '.png';
      link.href = dataUrl;
      link.click();
    }).catch((error) => {
      console.error('Error taking screenshot:', error);
    });
  }

}
