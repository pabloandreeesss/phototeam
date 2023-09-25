import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.page.html',
  styleUrls: ['./iniciar.page.scss'],
})
export class IniciarPage implements OnInit {

  formularioIniciar: FormGroup;

  user = {
    usuario: "",
    password: ""
  };

  constructor(
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private router: Router
  ) {
    this.formularioIniciar = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
    // Tu lógica de inicialización aquí
  }

  async ingresar() {
    let formulario = this.formularioIniciar.value;

    if (formulario.nombre == "" || formulario.password == "") {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Reintentar']
      });

      await alert.present();
      return;
    }

    let navigationExtras : NavigationExtras={
      state:{
        user: this.user
      }
    }

    this.router.navigate(['/home'], navigationExtras)

    
    // Aquí puedes agregar más lógica para el proceso de inicio de sesión
  }
}
