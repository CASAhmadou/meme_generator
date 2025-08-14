import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Meme } from '../../models/meme';

@Component({
  selector: 'app-meme-list',
  templateUrl: './meme-list.component.html',
  styleUrls: ['./meme-list.component.css'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemeListComponent implements OnInit {

  @Input() list!: Meme[];
  @Output() selectionMeme = new EventEmitter<Meme>();

  signalerSelection(memeSelectionne: Meme) {
    this.selectionMeme.emit(memeSelectionne);
  }

  constructor() { }

  ngOnInit() {
  }
}
