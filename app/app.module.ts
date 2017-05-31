import {NgModule} from  '@angular/core'
import{RouterModule} from '@angular/router'
import{BrowserModule} from '@angular/platform-browser'
import {EventsAppComponent} from './events-app.component'

import {EventsListComponent} from './events/events-list.component'
import {EventThumbnailComponent} from './events/events-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'
import{EventService} from './events/shared/event.service'
import{EventDetailsComponent} from './events/event-details/event-details.component'
import{appRoutes} from './routes'
import {CreateEventComponent} from './events/shared/create-event.component'
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
        CreateEventComponent

        ],
    providers:[ EventService],
    bootstrap:[EventsAppComponent]
})

export class AppModule{


}
