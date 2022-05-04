import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ErrorComponent } from './components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './components/create-session/create-session.component';
import { SessionListComponent } from './components/session-list/session-list.component';
import { CollapsibleWellComponent } from './components/collapsible-well/collapsible-well.component';
import { DurationPipe } from './pipes/duration.pipe';
import { Toastr, TOASTR_TOKEN } from './services/toastr.service';
import { JQ_TOKEN } from './services/jQuery.service';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './directives/modal-trigger.directive';
import { UpvoteComponent } from './components/upvote/upvote.component';
import { EventService } from './services/event.service';
import { VoterService } from './services/voter.service';
import { AuthService } from './services/auth.service';
import { EventsListResolverService } from './services/events-list-resolver.service';
import { LocationValidator } from './directives/location-validator.directive';
import { HttpClientModule } from '@angular/common/http';
import { EventResolverService } from './services/event-resolver.service';

const toastr: Toastr = window['toastr'];
const jQuery: Toastr = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    ErrorComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventService,
    VoterService,
    AuthService,
    EventsListResolverService,
    EventResolverService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'you have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
