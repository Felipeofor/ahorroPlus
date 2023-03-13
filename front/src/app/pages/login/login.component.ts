import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {LoaderService} from "../../services/loading.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  form: FormGroup = new FormGroup({})

  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    private router: Router,
    private loaderService: LoaderService,
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoDocumento: ['DNI', Validators.required],
      nroDocumento: ['', Validators.required],
      clave: ['', Validators.required],
    });
  }


  LogIn() {
    const tipoDocumento = this.form.value.tipoDocumento!;
    const nroDocumento = this.form.value.nroDocumento!.toString();
    const clave = this.form.value.clave!;
    if (this.form.valid) {
      this.loginService.login(tipoDocumento, nroDocumento, clave).subscribe(
        (data) => {
          console.log(data);
          if ( data === 'Usuario o clave incorrectos'){
            alert(data);
          }
          else {
            localStorage.setItem('token', data);
            this.loaderService.setLoading(true);
            setTimeout(() => {

              this.router.navigate(['home']);
            } , 500);
          }
        }
      );
    }
  }

  registrate() {
    this.router.navigate(['registrar']);
  }

}
