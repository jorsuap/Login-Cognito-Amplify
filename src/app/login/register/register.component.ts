import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/interfaces';
import { CognitoServicesService } from 'src/app/services/cognito/cognito-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  confirmCode:boolean =false;
  user:IUser = {} as IUser;


  constructor(
    private cognitoService:CognitoServicesService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  signUp(){
    this.cognitoService.singUp(this.user).then(()=>{
      this.confirmCode = true;
    }).catch((error)=>alert(error))
  };

  confirmSignUp(){
    this.cognitoService.confirmSignUp(this.user).then(()=>{
      this.router.navigate(['/login'])
    }).catch((error)=>alert(error))
  }

}
