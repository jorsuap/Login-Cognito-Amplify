import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/interfaces';
import { CognitoServicesService } from 'src/app/services/cognito/cognito-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  imgUrl = 'assets/User-Profile-PNG.png';
  user:IUser = {} as IUser;

  constructor(
    private cognitoService:CognitoServicesService,
    private router:Router,
  ) {}

  ngOnInit() {
    this.cognitoService.getUser().then((user)=>{
      this.user = user.attributes;
    })
  }

  upDateUser(){
    this.cognitoService.upDateUser(this.user).then(()=> alert('Updeted succesfully'))
    .catch((error)=>alert(error))
  }

  signOut(){
    this.cognitoService.signOut().then(()=>{
      this.router.navigate(['/user/login']);
    }).catch((error)=>alert(error))
  }

}
