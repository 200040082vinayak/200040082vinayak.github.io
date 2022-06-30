import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.scss']
})
export class AddPrComponent implements OnInit {



  content: string = "";
  file: File | undefined;
  user: string = "";
  price: string = "";
  prname: string = "";
  long: string= "";



  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  posts() {

    // if (this.content == null || this.content == undefined || this.content == "" ) {
    //   alert('Please provide description')
    //   console.log("no data")


    // }

    // else if(this.price == null || this.price == undefined || this.price == "" ) {
    //   alert('Please provide price')
    //   console.log("no price")
    // }

    // else {

    //   alert('Saved Successfully')
    // }



    this.api.addprod(this.file, this.user, this.content, this.price, this.prname, this.long)
      .subscribe(


        response => {
          console.log("here comes the response");
          console.log(this.content);
          console.log(this.file)


          // console.log(response);
          // this.employees = [response];
        },
        error => {
          console.log(error);
        }
      )
  }

  // openFile(){
  //   console.log("File open")
  // }

}


