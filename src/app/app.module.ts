import { DataTableModule } from './data-table/data-table.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchfilterPipe } from './searchfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    SearchfilterPipe,
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
