import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { ProductoInterface } from '../models/productoInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  productos = new BehaviorSubject([]);
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
}
