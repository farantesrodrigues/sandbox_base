import * as angular from 'angular';
import '@uirouter/angularjs';
import "oclazyload"
import {AComponent, AppComponent, BComponent} from './components';
import {routes} from "./routes";

const root = angular
    .module('root', ['ui.router', 'oc.lazyLoad'])
    .component(AppComponent.selector, AppComponent.options)
    .component(AComponent.selector, AComponent.options)
    .component(BComponent.selector, BComponent.options)
    .config(routes)
    .name;

angular.bootstrap(document, [root]);