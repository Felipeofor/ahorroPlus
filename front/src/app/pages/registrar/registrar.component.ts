import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'registrar-home',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  form: FormGroup = new FormGroup({})


  constructor(
    private loginService: LoginService,
    public fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tipoDocumento: ['DNI', Validators.required],
      nroDocumento: ['12000333', Validators.required],
      clave: ['', Validators.required],
    });
  }



  registrar() {
    const tipoDocumento = this.form.value.tipoDocumento!;
    const nroDocumento = this.form.value.nroDocumento!;
    const clave = this.form.value.clave!;
    if (this.form.valid) {
      this.loginService.registrar(tipoDocumento, nroDocumento, clave).subscribe(
        (data) => {
          if (data === 'Usuario registrado correctamente') {
            this.router.navigate(['login']);
          }
          else {
            alert(data);
          }
        });
    }
  }

  volver() {
    this.router.navigate(['login']);
  }

}
