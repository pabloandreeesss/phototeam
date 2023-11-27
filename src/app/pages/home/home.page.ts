import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  friends: any = [];
  

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.data = this.router.getCurrentNavigation()?.extras.state?.['user'];
        console.log(this.data);
      } else {
        this.router.navigate(['/inicio']);
      }
    });
  }

  

  runHttp() {
    this.http.get('http://demo8553695.mockable.io/')
      .subscribe(
        (data: any) => {
          console.log(data);
          this.friends = data;
        },
        (error) => {
          console.error('Error en la solicitud HTTP', error);
        }
      );
  }
  
  

  redirigirAConfig() {
    this.navCtrl.navigateForward('/config');
  }
}
