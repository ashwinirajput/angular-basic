import { Component, OnInit } from '@angular/core';
import { Hero } from './hero/hero';
import { HeroService } from './services/hero-service';

@Component({
  moduleId: module.id+'',
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit { 
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService){

    }
    ngOnInit(){
      this.getHeroes();
    }
    onSelect(hero:Hero){
       this.selectedHero = hero;
    }
    getHeroes(): void {
      this.heroService.getHeroes().then((data:Hero[])=>{
        this.heroes = data;
      });
    }
}
