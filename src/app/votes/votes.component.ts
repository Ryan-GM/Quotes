import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  upvote: number = 0;
  downvote: number = 0;

  like(){
    this.upvote ++;
  }

  unlike(){
    this.downvote ++;
  }

  constructor() { }

  ngOnInit() {
  }

}
