import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  
  constructor(
    private _router: Router,
  ) { }

  sessionFirstName = sessionStorage.getItem("firstName");
  sessionLastName = sessionStorage.getItem("lastName");
  sessionEmail = sessionStorage.getItem("email");
  sessionZipCode = sessionStorage.getItem("zipCode");
  sessionPrivacy = sessionStorage.getItem("privacy");

  member = {
    "firstName": this.sessionFirstName == null ? '' : this.sessionFirstName,
    "lastName": this.sessionLastName == null ? '' : this.sessionLastName,
    "email": this.sessionEmail == null ? '' : this.sessionEmail,
    "zipCode": this.sessionZipCode == null ? '' : this.sessionZipCode,
    "privacy": this.sessionPrivacy != "true" ? false : true,
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.member);
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.member["email"])))
    {
      window.alert('Please enter a valid email.');
      return;
    }
    if ((this.member["zipcode"]) && (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.member["zipcode"])))
    {
      window.alert('Please enter a valid zipcode.');
      return;
    }
    if (!this.member["privacy"])
    {
      window.alert('Please review our Privacy Policy and User Agreement.');
      return;
    }
    sessionStorage.setItem("firstName", this.member["firstName"]);
    sessionStorage.setItem("lastName", this.member["lastName"]);
    sessionStorage.setItem("email", this.member["email"]);
    sessionStorage.setItem("zipCode", this.member["zipCode"]);
    sessionStorage.setItem("privacy", this.member["privacy"].toString());
    this._router.navigate(['/roles']);
  }

}
