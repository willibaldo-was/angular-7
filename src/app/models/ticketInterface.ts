import { ProductoInterface } from './productoInterface';

export interface TicketInterface {
    noTicket: string;
    productos: ProductoInterface[];
    subtotal: number;
    time: Date;
}
