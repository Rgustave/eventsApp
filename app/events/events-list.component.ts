import {Component,OnInit} from '@angular/core'
import{EventService} from './shared/event.service'
import{ActivatedRoute}from '@angular/router'


@Component({
    template:`
     <div>
       <h1>Upcoming Angular 2 Events</h1>
      <hr/>
      <div class ="row">
          <div class ="col-md-5" *ngFor="let event of events" >
             <event-thumbnail  [event]="event"></event-thumbnail>
          <div>
      </div>
    </div>
    `
})

// We implement Oninit for typescript safety
export class EventsListComponent implements OnInit{
   events:any 
  constructor(private eventService : EventService, private route:ActivatedRoute){


  }

  ngOnInit(){
    // this.eventService.getEvents().subscribe(events=> {this.events=events})
   this. events =this.route.snapshot.data['events']
  }
 
}