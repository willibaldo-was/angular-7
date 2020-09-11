import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-control-asistencia',
  templateUrl: './control-asistencia.page.html',
  styleUrls: ['./control-asistencia.page.scss'],
})
export class ControlAsistenciaPage implements OnInit {
  lat : number;
  lon : number;
  total:string;
  constructor(public geolocation:Geolocation) {
    this.getGeolocation();
   }

  ngOnInit() {
  }
  
  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;

      let latMichu = 19.248950;
      let lonMichu = -98.195502;
      let distance = this.calculateDistance(this.lon, lonMichu, this.lat, latMichu); 
      if(distance < 1)
        this.total = distance+"KM"+"--Puntual";
        else
        this.total = distance+"KM"+"--Tarde";
    });
  }

  calculateDistance(lon1,lon2,lat1,lat2){
    let p = 0.017453292519943295;
    let c = Math.cos;
    let a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((lon1- lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    return dis*1000;
  }

}
