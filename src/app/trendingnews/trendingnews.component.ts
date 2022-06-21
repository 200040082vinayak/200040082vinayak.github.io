import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendingnews',
  templateUrl: './trendingnews.component.html',
  styleUrls: ['./trendingnews.component.scss']
})
export class TrendingnewsComponent implements OnInit {

  constructor() { }


  @Input() topic: string | undefined;

  ngOnInit(): void {

      
  }

  

}
