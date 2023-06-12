import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  private userSubject: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({} as IUser);

  setUser(user: IUser): void {
    this.userSubject.next(user);
  }

  getUser(): Observable<IUser> {
    return this.userSubject.asObservable();
  }

}
