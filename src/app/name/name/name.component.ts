import { Component } from "@angular/core";

@Component({
    selector: 'app-name',
    templateUrl: './name.component.html',
})
export class NameComponent{
    MyName: string = 'Juan Miguel'; 
    MyLastName: string = 'Vargas Cortés';
    showName: boolean = false;

    changeShowName(): void {
        this.showName = true;
    }
}