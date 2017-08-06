import {Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero/hero';
import { HeroService } from '../services/hero-service';

@Component({
    moduleId:module.id+'',
    selector:'heroes-list',
    templateUrl:'heroes-list.component.html'
})
export class HeroesListComponent{
    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];
    constructor(private heroService: HeroService, private router: Router){

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
    gotoDetail(): void {
        this.router.navigate(['/dashboard', this.selectedHero.id]);
    }   
}