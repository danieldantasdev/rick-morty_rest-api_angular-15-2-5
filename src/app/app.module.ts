import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterModule } from './features/character/character.module';
import { EpisodeModule } from './features/episode/episode.module';
import { LocationModule } from './features/location/location.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CharacterModule,
    EpisodeModule,
    LocationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
