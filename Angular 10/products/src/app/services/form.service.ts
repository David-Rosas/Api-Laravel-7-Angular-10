import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private http: HttpClient) { }

  loggedIn = false;

  registerUser(form: any){
    console.log(form.value);
    return this.http.post('http://localhost/api/users', form.value);
  }

   isAuthonticated(){
  	const promise = new Promise(
  		(resolve,reject) => {
  			setTimeout(() => {
          let t = localStorage.getItem('token');
          if(t){
            this.loggedIn = true;
            resolve(this.loggedIn);
          }else{
            this.loggedIn = false;
            reject();
          }
        },800);
  		});

  	return promise;
  }

  logIn(form: any): Observable<any>{
    return this.http.post('http://localhost/api/users', form.value);
    //return result;
  }

  logout(token: any): Observable<any>{
    return this.http.post('http://localhost/api/users', {'token': token});
    //return result;
  }


}
