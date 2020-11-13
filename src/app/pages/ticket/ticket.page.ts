import { Component, OnInit } from '@angular/core';
import { TicketInterface } from '../../models/ticketInterface';

import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  tickets: TicketInterface[]=[];
  constructor(
              private ticketService: DatabaseService,
              private router: Router) {   }

  ngOnInit() {
    this.ticketService.getDatabaseState().subscribe(rdy => {
      if(rdy){
        this.ticketService.getTicketsHoy().subscribe(tickets => {
          this.tickets = tickets;
        })
      }
    });
  }
  /*onSelect(ticket:TicketInterface,id){
    this.router.navigate(['/ticket/ticket-detail'],id);
  }*/
  crearTicket(){
    this.router.navigate(['/home']);
  }

}
