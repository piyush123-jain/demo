import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject, Observable, observable } from 'rxjs';

@Injectable()
export class socketConnectionService {
    serverMessage$: Observable<any>;
    constructor(private http: HttpClient) { 
        this.serverMessage$ = this.pushSource.asObservable()
        
    }
  
    private pushSource = new Subject<object>();
  
  
  subject = new Subject();
  
  emailCheck(email){
    this.http.post(environment.serverUrl+'/checkEmail',{email:email}).subscribe((data)=>{
        this.pushSource.next(data)
      })
    }
    
  login(login){
    this.http.post(environment.serverUrl+'/login',{loginData:login}).subscribe((data)=>{
      this.pushSource.next(data)
  })
  }

}