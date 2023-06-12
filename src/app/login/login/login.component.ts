import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/interfaces';
import { CognitoServicesService } from 'src/app/services/cognito/cognito-services.service';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:IUser = {} as IUser;

  constructor(
    private cognitoService:CognitoServicesService,
    private router:Router,
    private userService:CurrentUserService
  ) { }

  ngOnInit() {
  }

  signIn(){
    this.cognitoService.signIn(this.user).then(()=>{
      this.userService.setUser(this.user);
      this.router.navigate(['/user/profile']);
    }).catch((error) => alert(error))
  }

}
