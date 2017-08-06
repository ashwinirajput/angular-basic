"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
//other module
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var hero_header_component_1 = require("./hero-header/hero-header.component");
var hero_dashboard_component_1 = require("./hero-dashboard/hero-dashboard.component");
var heroes_list_component_1 = require("./heroes-list/heroes-list.component");
//services
var hero_service_1 = require("./services/hero-service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
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
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_header_component_1.HeroHeaderComponent,
            hero_dashboard_component_1.HeroDashboardComponent,
            heroes_list_component_1.HeroesListComponent
        ],
        providers: [hero_service_1.HeroService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map