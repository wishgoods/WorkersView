import { Component, OnInit,EventEmitter, Output, Injectable  } from '@angular/core';
import { employees } from 'src/app/Interfaces/employee';
import { SelectionService } from 'src/app/services/selection.service';


@Injectable({ 
  providedIn: 'root' 
})
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
})

export class SearchComponent implements OnInit {
  selecteduser: string ="בחר עובד";
  get_emp?: employees;
  users: any = [];
  selectionservice?:SelectionService;
 

  constructor(private selectservice:SelectionService) {

    this.get_emp = new employees();
    this.users = this.get_emp.getEmployees();
    this.selectionservice = selectservice;
    

  }

  ngOnInit(): void {
  }
  
  changeSelection() {
    this.selectionservice?.addItem(this.selecteduser);
    
  }
}
