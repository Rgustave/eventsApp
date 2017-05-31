import {NgModule} from  '@angular/core'
import{Router,RouterModule} from '@angular/router'
import{BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app.component'

import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import{EventService} from './events/shared/event.service'
import{EventDetailsComponent} from './events/event-details/event-details.component'
import{appRoutes} from './routes'
import {CreateEventComponent} from './events/shared/create-event.component'
import {Error404Component} from './errors/404.component'
import{EventRouteActivator} from './events/event-details/event-route-activator.service'

@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)],
    declarations:[
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component

        ],
    providers:[ 
        EventService,
        EventRouteActivator,
        {
            provide:'canDeactivateCreateEvent',
            useValue: chekDirtyState
        }
     ],
    bootstrap:[EventsAppComponent]
})

export class AppModule{

}


    function chekDirtyState(component:CreateEventComponent){
       if(component.isDirty)
         return window.confirm('You have not saved this event, do you really want to cancel?')
       return true 
    }