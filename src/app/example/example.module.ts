import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ExampleComponent } from "./example/example.component";

@NgModule({
    declarations: [
        ExampleComponent
    ],
    exports:[
        ExampleComponent
    ],
    imports: [
        CommonModule,
    ]
})
export class ExampleModule {}