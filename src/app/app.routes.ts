import { Routes } from '@angular/router';
import { Home } from './feature/home/home';
import { Service } from './feature/service/service';
import { About } from './feature/about/about';
import { Faq } from './feature/faq/faq';

export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: "full"  },
{path:'home' ,component:Home},
{path:'service' ,component:Service},
{path:'about' ,component:About},
{path:'faq' ,component:Faq},


];
