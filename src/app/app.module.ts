import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import  { HttpClientModule } from '@angular/common/Http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
