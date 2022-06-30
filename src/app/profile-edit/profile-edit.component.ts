import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor() { }


  industryname: string="";

  ngOnInit(): void {

    this.industryname= localStorage.getItem("industry")||'';
  }

}
