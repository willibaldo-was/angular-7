import { Injectable } from '@angular/core';
import { TicketInterface } from '../models/ticketInterface';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  tickets: TicketInterface[] = [];
  constructor() { }
  addTicket(ticket:TicketInterface){
    this.tickets.push(ticket);
  }
  getTickets(){
    return this.tickets;
  }
  getTicketDescription(id: string){
    /*
    return {
      // ... (retorna una copia)
      ...this.tickets.find(ticket => {
      return ticket.noTicket === id
    })
    }
    */
  }
/*  
  createTicket(newId: string, newLine:ProductoInterface[],newSubtotal:number,newTime:string){
    this.tickets.push({
      id: newId,
      productos: newLine,
      subtotal: newSubtotal,
      time: newTime});
  }
*/
}
