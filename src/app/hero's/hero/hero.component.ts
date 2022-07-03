import { Component } from "@angular/core";

@Component ({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
})

export class HeroComponent {

    name: string = 'Ironman';
    age: number = 45;

    get capitalizadeName(): string {
        return this.name.toUpperCase();
    }

    getName(): string {
        return `${this.name} - ${this.age}`;
        // return this.name + ' - ' + this.age.toString();
    }

    changeName(): void {
        this.name = 'Spiderman';
    }

    changeAge(): void {
        this.age = 25;
    }

}