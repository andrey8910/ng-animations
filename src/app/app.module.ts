import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MessageComponent } from './modal/message/message.component';
import { OpenCloseBlockComponent } from './open-close-block/open-close-block.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    OpenCloseBlockComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
