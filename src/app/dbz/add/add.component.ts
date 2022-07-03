import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {

  @Input() new: Character = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DbzService) {}
  
  // @Output() OnNewCharacter: EventEmitter<Character> = new EventEmitter();

  add(): void {
    if (this.new.name.trim().length === 0) return;
    this.dbzService.addCharacter(this.new);
    // console.log(this.new);
    // this.OnNewCharacter.emit(this.new);
    this.new = {
      name: '',
      power: 0
    } 
  }

  delete(): void {
    this.dbzService.characters === null 
      ? console.log("You don't have anymore characters") 
      : this.dbzService.deleteCharacter();


  }

}
