import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterComponent } from './character/character.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
