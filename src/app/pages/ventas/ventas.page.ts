import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.page.html',
  styleUrls: ['./ventas.page.scss'],
})
export class VentasPage implements OnInit {
  eventSource = [];
  viewTitle: string;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };
  ventas = [];
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  constructor() {
    const date1 = new Date(2020,10-2,7,13,0); 
    const date2 = new Date(2020,10-2,7,19,0); 
    const date3 = new Date(2020,9-1,8,13,10); 
    const date4 = new Date(2020,9-1,8,17,20); 
    
    this.ventas = [
      {
        title: "Ingresos 84.5",
        startTime: date1,
        endTime: date2,
        allDay:false,
      },
      {
        title: "Gastos 100.5",
        startTime: date1,
        endTime: date2,
        allDay:false,  
      },
      {
        title: "Utilidad -16",
        startTime: date1,
        endTime: date2,
        allDay:false,  
      },
      {
        title: "364.5",
        startTime: date3,
        endTime: date4,
        allDay:false
        },
  ];
  }

  ngOnInit() {
    this.guardarVentas();
  }
  next(){
    this.myCal.slideNext();
  }
  prev(){
    this.myCal.slidePrev();
  }
  onViewTitleChanged(title){
    this.viewTitle = title;
  }
  guardarVentas(){
    
    var events = [];
    events = this.ventas;
    this.eventSource = events;
  }
}
