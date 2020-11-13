import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalidaInterface } from 'src/app/models/salidaInterface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-salidas',
  templateUrl: './salidas.page.html',
  styleUrls: ['./salidas.page.scss'],
})
export class SalidasPage implements OnInit {

  constructor(private db: DatabaseService,
              private router: Router) { }
  salidas: SalidaInterface[] = [];
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.db.getSalidas().subscribe(sdas => {
          this.salidas = sdas;
        });
      }
    });
  }//ngOnInit

}
