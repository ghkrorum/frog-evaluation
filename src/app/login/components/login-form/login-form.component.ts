import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  login(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/discover']);
      })
      .catch(() => {
        alert('Usuario o contraseña incorrectos');
      });
    }
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
