import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quote:Quote[]=[
    new Quote('Ryan', 'Life is stress full, that is why they say REST IN PEACE!!', 'BlackDailyQuotes', new Date(2020,8,24)),
    new Quote('Bryce', 'Outgrind, Outhustle, Outwork Everyone', 'EmpireGrowth', new Date(2020,8,25))

  ];

  deleteQuote(isDone, index){
    if (isDone){
      let toDelete = confirm(`Sure about deleting quote by ${this.quote [index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completDate = new Date(quote.completDate)
    this.quote.push(quote)
  }

  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
