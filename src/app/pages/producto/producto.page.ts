import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { ProductoInterface } from 'src/app/models/productoInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  constructor(private db: DatabaseService,
              private router: Router
    ) { }

  productos: ProductoInterface[] = [];
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.db.getProductos().subscribe(ptos => {
          this.productos = ptos;
          console.log(this.productos);
        });
      }
    });
  }//ngOnInit
  crearProducto(){
    this.router.navigate(['/crear-producto']);
  }
  editarProducto(){
    this.router.navigate(['/editar-producto']);
  }

}
