import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  constructor(

    private router: Router
  ) { }

  ngOnInit() {
  }

  backToHome() {
    console.log("Back to Home button clicked");
  }

  username:any;
  password:any;

  loginSubmit() {
    console.log("Login Submit button clicked");
        this.router.navigateByUrl('/dashboard');
          console.log("Authorized Username and Password");
  }

  forgotPassword() {
      console.log("Forgot Password button clicked");
    }

}
