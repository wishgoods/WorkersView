import { Component, Injectable, OnInit } from '@angular/core';
import { task, tasks } from '../../Interfaces/task';
import { SelectionService } from 'src/app/services/selection.service';
import { NEVER } from 'rxjs';


@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  
})

export class TasksComponent implements OnInit {
  get_tasks?: tasks;
  tasks: task[] =[];
  filtered_tasks?: task[] = [];
  selected_user?: string = 'שם העובד או המחלקה';
  selection_service?: SelectionService;
  //items:any = [];
  pageOfItems?: Array<task> ;
  pageSize:number = 10;
  numbers:number[]=[5,10,15,20,30,40,50,60,70,80,90,100];

  constructor(private selectservice:SelectionService) {
    this.selection_service = selectservice;
    this.get_tasks = new tasks();
    this.tasks = this.get_tasks!.getTasks();

  }

  ngOnInit(): void {
    
    //this.items = Array(150).fill(10).map((x, i) => ({ id: (i + 1) , name: `Item ${i + 1}` }));
  
  }

  changeSelection() {

    this.selection_service?.getItem().subscribe((s) => {this.selected_user = s;});
    this.tasks=this.get_tasks!.getTasks();

    if(this.selected_user !='כל העובדים'){
    this.tasks=this.tasks!.filter( x => 
          x.EmployeeName === this.selected_user);}

  }

  ngOnDestroy() {
    this.selection_service!.clearLeaks();
    
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}

}
