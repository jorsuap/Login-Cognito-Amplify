import { Injectable } from '@angular/core';
import { Amplify, Auth } from 'aws-amplify';
import { enviroment } from 'src/enviroments/enviroment';
import { IUser } from 'src/app/interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CognitoServicesService {

constructor() {
  Amplify.configure({
    Auth:enviroment.cognito
  })
}

singUp(user:IUser):Promise<any>{
 return Auth.signUp({
    username:user.email,
    password:user.password,
  })
};

confirmSignUp(user:IUser):Promise<any>{
  return Auth.confirmSignUp(user.email, user.code.toString())
};

signIn(user:IUser):Promise<any>{
  return Auth.signIn(user.email, user.password.toString())
};

getUser():Promise<any>{
  return Auth.currentUserInfo()
};

upDateUser(user:IUser):Promise<any>{
  return Auth.currentUserPoolUser().then((cognitoUser)=>{
    return Auth.updateUserAttributes(cognitoUser,user)
  })
}

signOut():Promise<any>{
  return Auth.signOut();
}


}
