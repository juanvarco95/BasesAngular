import { Component } from '@angular/core';

@Component({
    selector: 'app-count',
    template: `
        <h1>{{title}}</h1>
        <button (click)="operator(base)">+{{base}}</button>
        <span> {{contador}} </span>
        <button (click) = "operator(-base)">-{{base}}</button>
        <h3>La base es: <strong>{{base}}</strong> </h3>
    `
})

export class CountComponent {
    title: string = 'Contador App';
    contador: number = 0;
    base: number = 10;

     //base: number = 0;
    operator( value: number) { 
    this.contador += value;
  }

}