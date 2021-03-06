import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NewsComponent } from './news/news.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NewpageComponent } from './newpage/newpage.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainbarComponent,
    SidebarComponent,
    NewsComponent,
    DropdownComponent,
    NewpageComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
