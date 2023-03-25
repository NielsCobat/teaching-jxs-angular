import { Component } from '@angular/core';

import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
  id: string = '';
  
  selectedPokemon: string = "";
  
  pokemons: Pokemon[] = [
      {
        id: "1",
        name: "Pikachu"
      },
      {
        id: "2",
        name: "charizard"
      },
      {
        id: "3",
        name: "onyx"
      },
      {
        id: "4",
        name: "Psyduck"
      }
    ]
}
