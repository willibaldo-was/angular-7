import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import { TicketQuery } from 'src/app/models/ticket-query';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.page.html',
  styleUrls: ['./ticket-detail.page.scss'],
})
export class TicketDetailPage implements OnInit {
  @Input() ticketDetail: string; 
  ticket: TicketQuery[] = [];
  recipiedId: string;
  constructor(private activatedRoute:ActivatedRoute,
              private ticketService:DatabaseService) { }
  ngOnInit() {
    /*this.activatedRoute.paramMap.subscribe(paraMap =>  {
      //if(!paraMap)
      this.recipiedId = paraMap.get('ticketId');  
    });*/
    this.recipiedId = this.activatedRoute.snapshot.paramMap.get('ticketId');
    this.findDetail();
  }// onInit
  findDetail(){
    this.ticketService.getDatabaseState().subscribe(rdy => {
      if(rdy)
        if(this.recipiedId != undefined){
          console.log("this.recipiedId",this.recipiedId);
          this.ticketService.getTicketDetail(+this.recipiedId.split("_")[1],this.recipiedId).subscribe(query => {
          this.ticket = query;
        })
      }
    });
  }
}
