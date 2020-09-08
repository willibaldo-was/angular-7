import { Component, OnInit } from '@angular/core';
import { TicketInterface } from 'src/app/models/ticketInterface';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {
  ticket: TicketInterface;
  recipiedId: string;
  constructor(private activatedRoute:ActivatedRoute,
              private ticketService:TicketService) { }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap =>  {
      //if(!paraMap)
      this.recipiedId = paraMap.get('ticketId');  
    });
    this.ticket = this.ticketService.getTicketDescription(this.recipiedId);
  }
}
