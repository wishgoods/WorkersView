import { Component, OnInit, ViewChild } from '@angular/core';
import { TasksComponent } from '../tasks-component/tasks.component';

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
    this.child?.changeSelection();
  }
}
