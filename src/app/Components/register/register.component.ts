import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/Shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service: UserService,private toastr: ToastrService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        console.log(res);
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('Stworzono nowego użytkownika', 'Rejestracja przebiegła pomyślnie');
          this.router.navigate(['']);
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Login jest zajęty','Rejestracja się nie udała');
                break;

              default:
              this.toastr.error(element.description,'Rejestracja się nie udała');
                break;
            }
          });
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
