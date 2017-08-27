import {AComponent} from "./A.component";
import {autoserializeAs} from "cerialize";

export class BComponent {
    public static selector: string = 'b';
    public static options: any = {
        template: require('./B.component.html'),
        controller: BComponent
    };
    public static dummyB: string = 'das kommt von B';

    constructor() {
        console.log(AComponent.dummyA)
    }

    @autoserializeAs(AComponent)
    private testB: AComponent;
}