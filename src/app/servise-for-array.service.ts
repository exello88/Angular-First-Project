import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiseForArrayService {


  generateArrayObservable(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.callApiUserInfo());
      observer.complete();
    });
  }

  callApiUserInfo() {
    let userList : any[] = [];
    let temp = {};
    for (let i = 0; i < Math.random() * 11 + 10; i++) {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(user => {
          temp = {
            "Name": user.results[0].name.first,
            "LastName": user.results[0].name.last,
            "City": user.results[0].location.city,
            "country": user.results[0].location.country,
            "Email": user.results[0].email,
            "PhoneNumber": user.results[0].phone
          }
          userList.push(temp);
        })
    }
    return userList;
  }
  constructor() { }
}
