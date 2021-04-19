import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { socketConnectionService } from '../socketConnection.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignUpComponent implements OnInit {

  public signUpData: any = {};
  demo = false;
  successMessage = false;
  dangeMessage = false;
  checkEmailMessage;
  emailBorderSuccessMessage = false;
  constructor(private http:HttpClient,private socket:socketConnectionService){
    this.socket.serverMessage$.subscribe(data=>{
        this.checkEmailMessage = '';  
      (!data.exists)?this.emailBorderSuccessMessage = true
      :this.checkEmailMessage = data.exists;
  })
     }


  ngOnInit() { }
  
  trueAndFalseStatement:any = { govt:false, pvt:false, bussiness:false, other:false };
  status = { marriedStatus:false, statusMarried: false }
  org_status:any = { govt:false, pvt:false, bussiness:false, other:false };

  // change value 
changeValue(e,name_of_object)
  {
    Object.entries(name_of_object)
    .forEach(([key, value]) =>
    { ( e == key) ?   name_of_object[e] = true 
      : name_of_object[key] = false; } )
  }
   checkEmail(){
     this.socket.emailCheck(this.signUpData.email);
    
  }
 

demoFunction(){
  setTimeout(()=>{
    this.dangeMessage = false
    this.successMessage = false
    },3000);
}

onSubmit(f) {
  if(this.emailBorderSuccessMessage){console.log(this.signUpData);
  this.http.post('http://localhost:3000/signUpPannel',this.signUpData)
  .subscribe(data=>{
    if (data['email'] == 'this email id exits') {this.dangeMessage = true;this.demoFunction();}
    else { this.successMessage  = true; this.demoFunction(); }
    
  })
  // this.signUpData = {};
  // console.log(this.signUpData);
 }
 else {
    alert('check your email id again');   
}

}
}

