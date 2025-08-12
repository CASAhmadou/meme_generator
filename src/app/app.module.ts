import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MemeViewerComponent } from './components/meme-viewer/meme-viewer.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MemeGeneratorComponent } from './components/meme-generator/meme-generator.component';
import { MemeListComponent } from './components/meme-list/meme-list.component';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      MemeViewerComponent,
      MemeGeneratorComponent,
      MemeListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    FormsModule
],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
