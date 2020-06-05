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
  sessionIsScreenwriter = sessionStorage.getItem("isScreenwriter");
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
    "isScreenwriter": this.sessionIsScreenwriter != "true" ? false : true,
    "isProducer": this.sessionIsProducer != "true" ? false : true,
    "isActor": this.sessionIsActor != "true" ? false : true,
    "isCrewMember": this.sessionIsCrewMember != "true" ? false : true,
    "isPropertyManager": this.sessionIsPropertyManager != "true" ? false : true,
    "isInvestor": this.sessionIsInvestor != "true" ? false : true,
    "isStreamer": this.sessionIsStreamer != "true" ? false : true,
    "isAudience": this.sessionIsAudience != "true" ? false : true,
  }

  store(s: string) {
    sessionStorage.setItem(s, (!this.member[s]).toString());
  }

  onSubmit() {
    console.log(this.member);
    sessionStorage.clear()
    this._router.navigate(['/thanks']);
  }

  ngOnInit(): void {
  }

}
