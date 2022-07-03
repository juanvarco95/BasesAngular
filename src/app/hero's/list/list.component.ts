import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent  {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Homelander' ];
  deleteHero: string[] = [];

  popHero(): void {
    // if(this.heroes.length > 0) {
    //   this.deleteHero.push(this.heroes[this.heroes.length - 1])
    //   console.log('You delete: ' + this.heroes.pop());
    // } else {
    //   console.log("You can't delete anymore, ok???");
    // }
    
    this.heroes.length
      ? this.deleteHero.push(this.heroes[this.heroes.length - 1])
      : console.log("You can't delete anymore, ok???");
    this.heroes.length 
      ? console.log('You delete: ' + this.heroes.pop()) 
      : console.log("You can't delete anymore, ok???");
    
    // this.heroes.pop();
  }
}
