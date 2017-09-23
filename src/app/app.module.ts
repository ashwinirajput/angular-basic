import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { AppComponent }  from './app.component';
//other module
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroHeaderComponent } from './hero-header/hero-header.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { FormComponent } from './shared/form-component/form-component';
//services
import { HeroService } from './services/hero-service';
@NgModule({
  imports:[
     BrowserModule,
      FormsModule,
      RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/dashboard',
          pathMatch: 'full',
        },{
          path:'dashboard',
          component:HeroDashboardComponent
        },{
          path:'heroes',
          component:HeroesListComponent
        },{
          path: 'dashboard/:id',
          component: HeroDetailComponent
        }
      ])
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent,
    HeroHeaderComponent,
    HeroDashboardComponent,
    HeroesListComponent,
    FormComponent
  ],
  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
