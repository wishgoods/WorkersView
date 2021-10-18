import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { TreeviewItem } from 'ngx-treeview';
import { TasksComponent } from '../tasks-component/tasks.component';
@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  @ViewChild(TasksComponent) child?:TasksComponent ;
 
  

  constructor() {
 
   }

  ngOnInit(): void {

  }
  selectionChanged(){
    this.child?. refreshDepartments();
    this.child?.changeSelection();
    
  }
  departmentChanged(item: any[]){
    this.child?.changeDepartment(item);
  }
}
