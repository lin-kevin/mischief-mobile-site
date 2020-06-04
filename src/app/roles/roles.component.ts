import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  sessionFirstName = sessionStorage.getItem("firstName");
  sessionLastName = sessionStorage.getItem("lastName");
  sessionEmail = sessionStorage.getItem("email");
  sessionZipCode = sessionStorage.getItem("zipCode");
  sessionIsScreenWriter = sessionStorage.getItem("isScreenwriter");
  sessionIsProducer = sessionStorage.getItem("isProducer");
  sessionIsActor = sessionStorage.getItem("isActor");
  sessionIsCrewMember = sessionStorage.getItem("isCrewMember");
  sessionIsPropertyManager = sessionStorage.getItem("isPropertyManager");
  sessionIsInvestor = sessionStorage.getItem("isInvestor");
  sessionIsStreamer = sessionStorage.getItem("isStreamer");
  sessionIsAudience = sessionStorage.getItem("isAudience");

  member = {
    "firstName": this.sessionFirstName,
    "lastName": this.sessionLastName,
    "email": this.sessionEmail,
    "zipCode": this.sessionZipCode,
    "isScreenwriter": false,
    "isProducer": false,
    "isActor": false,
    "isCrewMember": false,
    "isPropertyManager": false,
    "isInvestor": false,
    "isStreamer": false,
    "isAudience": false,
  }

  /*
  storeIsScreenWriter() {
    sessionStorage.setItem('isScreenWriter', this.member["isScreenWriter"].toString());
    console.log(sessionStorage.getItem("isScreenWriter"));
    console.log(this.member["isScreenWriter"]);
  }
  */

  onSubmit() {
    console.log(this.member);
    sessionStorage.clear()
    this._router.navigate(['/thanks']);
  }

  ngOnInit(): void {
  }

}
