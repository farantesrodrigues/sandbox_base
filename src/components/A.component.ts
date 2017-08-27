import {BComponent} from "./B.component";
import {autoserializeAs} from "cerialize";

export class AComponent {
    public static selector: string = 'a';
    public static options: any = {
        template: require('./A.component.html'),
        controller: AComponent
    };
    public static dummyA: string = 'das kommt von A';

    constructor() {
        console.log(BComponent.dummyB)
    }

    @autoserializeAs(BComponent)
    private testA: BComponent;
}
