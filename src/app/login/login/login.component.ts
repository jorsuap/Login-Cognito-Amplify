import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/interfaces';
import { CognitoServicesService } from 'src/app/services/cognito/cognito-services.service';
import { CurrentUserService } from 'src/app/services/current-user/current-user.service';
import { enviroment } from 'src/enviroments/enviroment';

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
  };

  signGoogle(){
    window.location.href = "https://pratice-pragma.auth.eu-central-1.amazoncognito.com/login?client_id=4auq5536titj8ehac7edmmtq3u&response_type=token&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fuser%2Fprofile";
    // window.location.href = `https://accounts.google.com/v3/signin/identifier?dsh=S-955737747%3A1686582904981900&client_id=${enviroment.client_id}&o2v=2&redirect_uri=https%3A%2F%2Fpratice-pragma.auth.eu-central-1.amazoncognito.com%2Foauth2%2Fidpresponse&response_type=code&scope=openid+profile+email&service=lso&state=H4sIAAAAAAAAAE1QXW-jMBD8L34OicEYDI8lEflsmyhpU51OyDXGOBhMjEnanu6_n--kk_q0M9qZ3dH8AhSkgI8e4501VHl-8RiY9rTFDQcT8O6WudZC_SXMkZCOV4xRZKW9EF5TFvOybe0VjU5QOkFtbZ_OZkozqmo92DQMIJyNAzez3uhK_rvEndDqhncOV99fCJD-ALylUjmie97J0oH_xp8T0Dj1lklSIJnhJ37JZdyHSpp8uZ1DNtwPnFDv_NLEX_g5Ogwk2S2b030h9vNKouK6YkWy1_WOjZvXymTiUeyvFj29vz3cznoZFPl61VueJccFrRtoCE1IeBebZp59vqrTx8GWZ3--Fhe47I519XA7-JtojKKVXqz8PjNvsNvlWWluZkvW2cszc-GVS9wbaiXjnpuipVM62nr6vfMpbemX7pgWnbR6ynTrjC1I_YhEmAQJDF0JIK2oGvgEGHcRxQmuGIFejIPSCxOKPUrDwKtIxBGKCYMoBL__ABt_4XzeAQAA.H4sIAAAAAAAAAPN0fXuUR7l7yuueZ_fDV9ZfYuAWFXkrt0ZjlwCX8JO-8lAAbgO_SSAAAAA.3&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMELzhUmyPl8raulWXzbO3Xsvqhl9pk4F75w_VTyt6JHrr36LLPumkjHs2Cp0bq2DPdH1lw-yayJj3UPcLHX7FkhiU2ZQ8zXMpsMU93o5aSvkkWCnLICn7xc-qy8jIN4q2BE0xxBK-TvZHPFYTc8bL2lJJ--FMVNLHotp3UzGvsKl_bpIMVsWhKmU9npwiGyTVxBX6W6hjHN5hmSeqa8cP0MWjWs6jaS00ms5xQ7tZUJNGt6UVPJnVZssMpKbFYXlCWl-THge1Fz6R1zRHqcAJreqjNygxOHE77M7brCTzeWCuNfyQd2ReEqF6i87dKUvhALOjkdixvkXzWYZ6io4PleHYqfF15_xyDD-yJbxGFBWDXnT_tHi-MBMh2YrPQDfgDGO0HX7traoKvmAwehuBj3J9eEAFuDfcFFluVCCzVRQ44-xELQcmRn5QOAakWBCQrQrH_7ytFvlMSUUA3Q19hGQXItf2vHt3vV4L7BwBUMhDAj3xdJCI0nShtwRTccRUhZyR0%26as%3DS-955737747%253A1686582904981900%26client_id%3D25335897075-qu3so18e64aflfp1hskhjf2osmg3588j.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fpratice-pragma.auth.eu-central-1.amazoncognito.com&rart=ANgoxcfB0avs3XCecT2yPcpjIuzyq6sNvoZqb3YUEfVzz5Y0a5JbGPVo_8-I4u-BmV0BYddfvtS1Mb3_e7IScfvC10i4OdzBxg`;

  }

}
