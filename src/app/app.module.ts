import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './components/page-component/page.component';
import { SearchComponent } from './components/search-component/search.component';
import { FormsModule } from '@angular/forms';
import { DepartmentsComponent } from './components/departments-component/departments.component';
import { TasksComponent } from './components/tasks-component/tasks.component';
import {
  TreeviewModule,
  DropdownTreeviewComponent,
  TreeviewConfig,
  TreeviewI18n,
  DefaultTreeviewEventParser,
  TreeviewEventParser
} from "ngx-treeview";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SelectionService } from './services/selection.service';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SearchComponent,
    DepartmentsComponent,
    TasksComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    TreeviewModule.forRoot(),
    BrowserAnimationsModule,
    JwPaginationModule
  ],
  providers: [SelectionService, TreeviewConfig,
    { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }],
  bootstrap: [AppComponent]
})
export class AppModule { }