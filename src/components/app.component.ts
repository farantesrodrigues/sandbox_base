export class AppComponent {
    public static selector: string = 'app';
    public static options: any = {
        template: require('./app.component.html'),
        controller: AppComponent
    };
    env: boolean = !!process.env.NODE_ENV
}