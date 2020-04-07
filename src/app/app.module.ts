import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ChallengeComponent } from './challenge/challenge.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    ChallengeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
