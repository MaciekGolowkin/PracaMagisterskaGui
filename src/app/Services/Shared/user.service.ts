import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder) { }


  formModel=this.fb.group({
    UserName:['', Validators.required],
    FullName:[''],
    Email:['',Validators.email],
    Passwords : this.fb.group(
      {
        Password:['',Validators.required],
        ConfirmPassword:['',Validators.required],
      }
    )
  })

}
