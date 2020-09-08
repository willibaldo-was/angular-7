import { ProductoInterface } from '../models/productoInterface';

export interface VentasInterface{
    id: string;
    fecha: Date;
    cliente: string;
    typeDocument: string;
    importe: number;
    producto:  ProductoInterface;
    hide: boolean;
}