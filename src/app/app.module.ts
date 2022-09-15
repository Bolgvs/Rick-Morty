import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterComponent } from './character/character.component';
import { AddCharactersComponent } from './crud/add-characters/add-characters.component';
import { CharactersDetailsComponent } from './crud/characters-details/characters-details.component';
import { CharactersListComponent } from './crud/characters-list/characters-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    AboutUsComponent,
    CharacterComponent,
    AddCharactersComponent,
    CharactersDetailsComponent,
    CharactersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
