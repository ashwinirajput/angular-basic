"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("../hero-detail/hero-detail.component");
var hero_dashboard_component_1 = require("../hero-dashboard/hero-dashboard.component");
var heroes_list_component_1 = require("../heroes-list/heroes-list.component");
var form_component_1 = require("../shared/form-component/form-component");
exports.routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }, {
        path: 'dashboard',
        component: hero_dashboard_component_1.HeroDashboardComponent
    }, {
        path: 'heroes',
        component: heroes_list_component_1.HeroesListComponent
    }, {
        path: 'dashboard/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }, {
        path: 'add-hero',
        component: form_component_1.FormComponent
    }
];
var AppRoutesModule = (function () {
    function AppRoutesModule() {
    }
    return AppRoutesModule;
}());
AppRoutesModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule],
    })
], AppRoutesModule);
exports.AppRoutesModule = AppRoutesModule;
exports.appRoutesComponent = [hero_dashboard_component_1.HeroDashboardComponent, heroes_list_component_1.HeroesListComponent, hero_detail_component_1.HeroDetailComponent, form_component_1.FormComponent];
//# sourceMappingURL=app.routes.js.map