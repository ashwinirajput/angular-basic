import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroDashboardComponent } from '../hero-dashboard/hero-dashboard.component';
import { HeroesListComponent } from '../heroes-list/heroes-list.component';
import { FormComponent } from '../shared/form-component/form-component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }, {
        path: 'dashboard',
        component: HeroDashboardComponent
    }, {
        path: 'heroes',
        component: HeroesListComponent
    }, {
        path: 'dashboard/:id',
        component: HeroDetailComponent
    }, {
        path: 'add-hero',
        component: FormComponent
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutesModule {

}
export const appRoutesComponent: any = [HeroDashboardComponent, HeroesListComponent, HeroDetailComponent, FormComponent];