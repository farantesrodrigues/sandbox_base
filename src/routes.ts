import {AComponent, BComponent} from "./components";

export function routes($stateProvider): void {
    const helloState = {
        name: 'A',
        url: '/A',
        component: AComponent.selector/*,
        lazyLoad: function (transition) {
            const $ocLazyLoad = transition.injector().get('$ocLazyLoad');
            return import('./A.component')
                .then(A => $ocLazyLoad.load(A));
        }*/
    };
    const aboutState = {
        name: 'B',
        url: '/B',
        component: BComponent.selector
    };
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
}

routes.$inject = ['$stateProvider'];
