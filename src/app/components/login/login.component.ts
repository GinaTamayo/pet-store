import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  authenticationError: boolean = false;


  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Lógica para autenticar al usuario
      const credentials = this.loginForm.value;
      
      if (credentials.email === 'user@example.com' && credentials.password === '123') {
        console.log(credentials + 'este es su usuario');
        
        //this.router.navigate(['/catalogo']);
        // alert("Registro Exitoso")
        
      } else {
        console.log('Sus datos son invalidos');
        
        // alert("Registro invalido")
      }
    } else {
      // Manejar errores de validación
    }
  }
}
