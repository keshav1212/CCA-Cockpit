import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  searchValue:string='';
  cards:string[]=['Card 1','Card 2', 'Card 3', 'Card 4', 'Card 5'];

  get filteredCards():string[]{
    return this.cards.filter(card=>
      card.toLowerCase().includes(this.searchValue.toLowerCase()));
  }

}


// searchValue:string='';
//   cards:Card[]=[
//     {title:'Keshav', subtitle:'Developer', content:'Show Profile'},
//     {title:'Abhinav', subtitle:'Architect', content:'Show Profile'},
//     {title:'Ankur', subtitle:'Tester', content:'Show Profile'},
//     {title:'Ankit', subtitle:'Front end Developer', content:'Show Profile'},
//     {title:'Vikas', subtitle:'Full stack', content:'Show Profile'},
//   ];

//   get filteredCards():Card[]{
//     return this.cards.filter(card=>
//       card.title.toLowerCase().includes(filterValue) || 
//       card.subtitle.toLowerCase().includes(filterValue));
//   }