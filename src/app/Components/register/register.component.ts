import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Shared/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService) { }

  ngOnInit(): void {
  }

}
