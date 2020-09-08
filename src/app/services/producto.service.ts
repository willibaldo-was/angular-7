import { Injectable } from '@angular/core';
import { ProductoInterface } from '../models/productoInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoInterface[];  clean: ProductoInterface[];  ticket: ProductoInterface[]; 
  idActual: String=""; qty: number=1; subtotal:number=0 ;
  constructor() { 
    this.productos = [
      {id_producto:'1', description:"Hdo Sencillo", price:16, logo: 'âœ“',qty: 1,total:16,hide:true},
      {id_producto:'2', description:"Hdo Doble", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'3', description:"Canasta", price:40, logo: 'âœ“',qty: 1,total:40,hide:true},
      {id_producto:'4', description:"Pta Fruta", price:17, logo: 'âœ“',qty: 1,total:17,hide:true},
      {id_producto:'5', description:"Pta Crema", price:20, logo: 'âœ“',qty: 1,total:20,hide:true},
      {id_producto:'6', description:"Nuez Entera", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'7', description:"Pta Cubierta", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'8', description:"Agua 0.5 lt", price:17, logo: 'âœ“',qty: 1,total:17,hide:true},
      {id_producto:'9', description:"Agua 1 lt", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'10', description:"Fresas", price:40, logo: 'âœ“',qty: 1,total:40,hide:true},
      {id_producto:'11', description:"Litro Helado", price:120, logo: 'âœ“',qty: 1,total:120,hide:true},
      {id_producto:'12', description:"Banana", price:55, logo: 'âœ“',qty: 1,total:55,hide:true},
      {id_producto:'13', description:"Ord. gorditas", price:35, logo: 'âœ“',qty: 1,total:35,hide:true}
    ];
    this.ticket = [];  
  } // fin constructor
  deleteAll(){
    this.productos = [
      {id_producto:'1', description:"Hdo Sencillo", price:16, logo: 'âœ“',qty: 1,total:16,hide:true},
      {id_producto:'2', description:"Hdo Doble", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'3', description:"Canasta", price:40, logo: 'âœ“',qty: 1,total:40,hide:true},
      {id_producto:'4', description:"Pta Fruta", price:17, logo: 'âœ“',qty: 1,total:17,hide:true},
      {id_producto:'5', description:"Pta Crema", price:20, logo: 'âœ“',qty: 1,total:20,hide:true},
      {id_producto:'6', description:"Nuez Entera", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'7', description:"Pta Cubierta", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'8', description:"Agua 0.5 lt", price:17, logo: 'âœ“',qty: 1,total:17,hide:true},
      {id_producto:'9', description:"Agua 1 lt", price:30, logo: 'âœ“',qty: 1,total:30,hide:true},
      {id_producto:'10', description:"Fresas", price:40, logo: 'âœ“',qty: 1,total:40,hide:true},
      {id_producto:'11', description:"Litro Helado", price:120, logo: 'âœ“',qty: 1,total:120,hide:true},
      {id_producto:'12', description:"Banana", price:55, logo: 'âœ“',qty: 1,total:55,hide:true},
      {id_producto:'13', description:"Ord. gorditas", price:35, logo: 'âœ“',qty: 1,total:35,hide:true}
    ];
    this.ticket = [];  
  }
  getIdProducts(){
    return this.productos;
  }
  cleanProduct(){
    return this.clean;
  }
  getTicket(){
    return this.ticket;
  }
  
  addProductTicket(){
    if(this.idActual != "")
    // si el producto no existe en el ticket
        if(this.productos[this.idActual.valueOf()].logo === 'âœ“'){
        this.ticket.push(this.productos[this.idActual.valueOf()]);
        this.productos[this.idActual.valueOf()].logo = '1';
        this.subtotal += this.productos[this.idActual.valueOf()].price*this.productos[this.idActual.valueOf()].qty;
      }else{
        // si ya existe en el ticket se incrementa una unidad
        var indexItem = this.ticket.findIndex(x => x == this.productos[this.idActual.valueOf()]);
        this.plu(indexItem,1);
      }
    this.idActual="";
  }
  indexOfPlu(x:String){
    for (let index = 0; index < this.productos.length; index++) {
      const element = this.productos[index];
      if (element.id_producto === x){
        //id Actual es le id del arreglo Productos
        this.idActual = index.toString();
        return this.productos[index].description; break;
      }
    }
    return 'no existe';
  }
  plu(index: number,cant: number){    
    this.ticket[index].qty += cant;
    this.calculaSubtotal(index,cant);
    this.ticket[index].logo = this.ticket[index].qty.toString();
  }
  calculaSubtotal(index: number,cant: number){
    if(cant ===1)
      this.subtotal = this.subtotal + this.ticket[index].price;
      else if(cant === -1)
        this.subtotal = this.subtotal - this.ticket[index].price;
          else if(cant > 1) 
            this.subtotal = this.subtotal + (this.ticket[index].price*this.ticket[index].qty);
  }
  generarTicket(){
    localStorage.setItem('ticket',JSON.stringify(this.ticket));
  }
  //agregado 7-09-20
  getProducts(){
    return this.productos;
  }
}