import { Component, OnInit } from '@angular/core';
import { TicketInterface } from '../../models/ticketInterface';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  tickets: TicketInterface[]=[];
  constructor(public ticketService: TicketService,
              private router: Router) {   }

  ngOnInit() {
    this.tickets =  this.ticketService.getTickets();
    
  }
  onSelect(ticket:TicketInterface,id){
    this.router.navigate(['/ticket/ticket-detail'],id);
  }
  crearTicket(){
    this.router.navigate(['/home']);
  }

}
