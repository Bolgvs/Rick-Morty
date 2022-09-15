import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterComponent } from './character/character.component';
import { CharactersListComponent } from './crud/characters-list/characters-list.component';
import { CharactersDetailsComponent } from './crud/characters-details/characters-details.component';
import { AddCharactersComponent } from './crud/add-characters/add-characters.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'', redirectTo:'/characters',
    pathMatch:'full'
  },
  {
    path:'characters',
    component:CharactersComponent
  },
  {
    path:'characters/character/:id',
    component: CharacterComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path: 'characters/list',
    component: CharactersListComponent,
  },
  {
    path: 'characters/:id',
    component: CharactersDetailsComponent,
  },
  {
    path: 'add',
    component: AddCharactersComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
