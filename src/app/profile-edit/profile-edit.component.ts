import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Bprofile from '../models/bprofile';
import Prof_get_api from '../models/prof_get_api';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  constructor(private api: ApiService) { }


  pictureuser: string = "";
  username: string = "";
  industryname: string = "";


  data: Prof_get_api | undefined;
  businessdata: Bprofile | undefined;



  aboutus: string = "";
  phone: string = "";
  email: string = "";
  website: string = "";
  employee_count: string = "";
  interest: string = "";
  startup_name: string = "";
  operational: string = "";
  city: string = "";
  linkedin: string = "";
  twitter: string = "";
  id: number = -1;
  profile_pic: File | undefined;
  presentkeymembers: Array<any> = [];
  keymembers: Array<{
    image_key_member: File | undefined,
    name: string,
    position: string,
    link: string
  }> = [{
    "image_key_member": undefined,
    "name": "",
    "position": "",
    "link": ""
  }]
  // }, {
  //   "image_key_member": undefined,
  //   "name": "",
  //   "position": "",
  //   "link": ""
  // }, {
  //   "image_key_member": undefined,
  //   "name": "",
  //   "position": "",
  //   "link": ""
  // }, {
  //   "image_key_member": undefined,
  //   "name": "",
  //   "position": "",
  //   "link": ""
  // }, {
  //   "image_key_member": undefined,
  //   "name": "",
  //   "position": "",
  //   "link": ""
  // }];

  ngOnInit(): void {



    this.industryname = localStorage.getItem("industry") || '';
    console.log(this.industryname)


    this.username = localStorage.getItem("username") || '';



    // if (this.username==null){
    //   return
    // }

    this.api.prof_get(this.username)
      .subscribe(
        response => {



          console.log('api is working');

          console.log(response);
          this.id = <number><unknown>response.id;
          console.log("ii", this.id)
          this.data = response;
          // localStorage.setItem("industry", this.indusname);

          console.log(localStorage.getItem("industry"));

          this.pictureuser = localStorage.getItem("profilepic") || "";

        },

        error => {
          console.log('Error')
        }
      )


    this.api.bprofile(this.username)
      .subscribe(
        response => {

          console.log('api is working');

          console.log("one", response);

          this.businessdata = response;

          this.aboutus = this.businessdata.desc
          this.employee_count = this.businessdata.employee_count
          this.interest = this.businessdata.interest

          this.startup_name = this.businessdata.legal_name_of_startup
          this.phone = this.businessdata.mobile
          this.email = this.businessdata.startup_email
          this.website = this.businessdata.website
          this.linkedin = this.businessdata.linkedin
          this.twitter = this.businessdata.twitter
          this.presentkeymembers = response.keymembers

          this.operational = this.businessdata.operational_since.split('T')[0]
          this.city = this.businessdata.city

          console.log("bd", this.businessdata)
        },

        error => {
          console.log('Error')
        }
      )

  }

  submitted() {
    // alert(this.username)
    // // alert(JSON.stringify(this.keymembers))
    // console.log(this.keymembers)

    this.api.edit_profile(this.profile_pic,
      this.username, this.startup_name, this.aboutus, this.city, this.linkedin, this.twitter, this.keymembers).subscribe(
        response => {
          alert("Successfully edited")
        },
        error => {
          console.log('Error' + error)
        }
      )
  }
  changed(e: any) {
    this.profile_pic = e.target.files[0];
    console.log(this.profile_pic)
  }
  changed0(e: any) {
    this.keymembers[0].image_key_member = e.target.files[0];
  }
  changed1(e: any) {
    this.keymembers[1].image_key_member = e.target.files[0];

  }
  changed2(e: any) {
    this.keymembers[2].image_key_member = e.target.files[0];

  }
  changed3(e: any) {
    this.keymembers[3].image_key_member = e.target.files[0];

  }
  changed4(e: any) {
    this.keymembers[4].image_key_member = e.target.files[0];

  }

  add_member() {
    //alert("f")
    // userid: number, profile_pic: File | undefined, name: string, linkedin: string, designation: string
    this.api.ktm_add(this.id, this.keymembers[0].image_key_member, this.keymembers[0].name,
      this.keymembers[0].link, this.keymembers[0].position).subscribe(
        response => {
          alert("Successfully added")
        },
        error => {
          console.log('Error' + error)
        }
      )
  }
  delete(id: number) {
    //alert(id)
    this.api.ktm_delete(id).subscribe(
      response => {
        alert("Successfully deleted")
      },
      error => {
        console.log('Error' + error)
      }
    )
  }


}
