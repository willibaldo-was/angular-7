import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from 'src/app/models/productoInterface';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage implements OnInit {

  constructor(private db: DatabaseService) { }
  ngOnInit() {

  }
  generarProducto(description,price){
    this.db.addProduct(description,price);
  }
}
