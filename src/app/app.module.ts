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
//router
import { AppRoutesModule, appRoutesComponent } from './router/app.routes';
//services
import { HeroService } from './services/hero-service';
@NgModule({
  imports:[
     BrowserModule,
      FormsModule,
      AppRoutesModule
  ],
  declarations: [ 
    AppComponent,
    appRoutesComponent,
    HeroHeaderComponent,
  ],
  providers:    [HeroService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
