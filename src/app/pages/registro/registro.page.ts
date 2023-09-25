import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'confirmacion-password': new FormControl("",Validators.required),
      'email': new FormControl("",Validators.required),

    })
  }

  ngOnInit() {
  }

  async registrar(){
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Error de Registro',
        message: 'Tienes que llenar todos los campos',
        buttons: ['Reintentar']
      });

      await alert.present();
      return;
    }else{
      const alert = await this.alertController.create({
        header: 'Se ha registrado correctamente',
        buttons: ['Volver al inicio']
      })
      this.navCtrl.navigateRoot('inicio');
      await alert.present();
    }
    } 

  }


