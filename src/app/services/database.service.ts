import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { ProductoInterface } from '../models/productoInterface';
import { HttpClient } from '@angular/common/http';
import { SalidaInterface } from '../models/salidaInterface';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  productos = new BehaviorSubject([]);
  salidas = new BehaviorSubject([]);

  constructor(private plt: Platform, 
              private sqlitePorter: SQLitePorter,
              private sqlite: SQLite,
              private http:HttpClient) { 
    this.plt.ready().then(()=>{
      this.sqlite.create({
        name: 'michuDatabase.db',
        location: 'default'
      })
      .then((db:SQLiteObject)=>{
        this.database = db;
        this.seedDatabase();
      });
    });
  }//constructor
  
  seedDatabase(){
    this.http.get('assets/michuDb.sql',{ responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database,sql)
      .then(_ => {
        this.loadProductos();
        this.loadSalidas();
        this.dbReady.next(true);
      })
      .catch(e => console.error(e));
    });
  }//seed Data base

  getDatabaseState(){
    return this.dbReady.asObservable();
  }

  getProductos():Observable<ProductoInterface[]>{
    return this.productos.asObservable();
  }

  getSalidas():Observable<SalidaInterface[]>{
    return this.salidas.asObservable();
  }
  
  loadSalidas(){
    return this.database.executeSql('SELECT * FROM salidas',[]).then(data => {
      let salidas: SalidaInterface[] = [];

      if(data.rows.length > 0){
        for(let i=0;i<data.rows.length;i++){
          salidas.push({
            id_salida: data.rows.item(i).id_salida,
            description: data.rows.item(i).description,
            price: data.rows.item(i).price
          });
        }
      }
      this.salidas.next(salidas);
    });
  }
  loadProductos(){
    return this.database.executeSql('SELECT * FROM productos',[]).then(data => {
      let productos: ProductoInterface[] = [];

      if(data.rows.length > 0){
        for(let i=0;i<data.rows.length;i++){
          productos.push({
            id_producto: data.rows.item(i).id_producto,
            description: data.rows.item(i).description,
            price: data.rows.item(i).price,
            logo: data.rows.item(i).logo,
            qty: data.rows.item(i).qty,
            total: data.rows.item(i).total,
            hide: data.rows.item(i).hide
          });
        }
      }
      this.productos.next(productos);
    });
  }//load producto
  addProduct(description,price){
    let sql = "INSERT INTO productos (id_producto,description,price,logo,qty,total,hide) VALUES (?,?,?,?,?,?,?)";
    return this.database.executeSql(sql,["",description,price,1,1,price,false]);
  }
  updateProduct(){
    
  }
  eliminarProducto(){

  }
  findProductPlu(id:String): Promise<ProductoInterface>{
    return this.database.executeSql('SELECT * FROM productos WHERE id_producto = ?',[id]).then(data => {
    if(data == undefined)
      data = [];
        return {
            id_producto: data.rows.item(0).id_producto,
            description: data.rows.item(0).description,
            price: data.rows.item(0).price,
            logo: data.rows.item(0).logo,
            qty: data.rows.item(0).qty,
            total: data.rows.item(0).total,
            hide: data.rows.item(0).hide
        }
    });
  }
  
  //////////////se copio del servicio producto.service
  productoService: ProductoInterface[] = [];
  clean: ProductoInterface[];  ticket: ProductoInterface[] = []; 
  idActual: String=""; qty: number=1; subtotal:number=0 ;

  deleteAll(){
    this.productos.subscribe(ptos => {
      this.productoService = ptos;
    });
    this.ticket = [];  
  }
 
  cleanProduct(){
    return this.clean;
  }
  getTicket(){
    return this.ticket;
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
  getProductService(){
    return this.productoService;
  }
}
