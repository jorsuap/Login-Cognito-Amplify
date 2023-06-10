import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  password!:string;
  email!:string;
  fullName!:string;

  constructor() { }

  ngOnInit() {
  }

}
