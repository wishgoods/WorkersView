import { Component, OnInit } from '@angular/core';
import { TreeItem, TreeviewItem } from 'ngx-treeview';
import { departments,department } from 'src/app/Interfaces/department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  
  json_obj =[];
  items: any;
  get_departments : departments ; 
  departments:department[];
  c_counter:number=0;

  constructor(){ 
    this.get_departments = new departments();
    this.departments = this.get_departments.getDepartments();
    let p_counter = 0 ;
    this.departments.forEach(element => {

      if(element.ParentID == 0){
        p_counter++;
        this.json_obj.push(
          {
            text: element.DepartmentName ,
            value: 'p'+p_counter.toString() ,
            children: [],
            id: element.DepartmentID.toString() ,
          }as never
        );
        element.DepartmentName = 'fixed';
      }
    });

    let is_finished = false;
    while(!is_finished){
      is_finished = true;
      
      this.json_obj.forEach(j_element => {
        this.c_counter=0;
      this.departments.forEach(d_element => {
      
     
       
        if(d_element.ParentID==j_element['id'] && d_element.DepartmentName!='fixed')
        {
          is_finished = false;
          this.c_counter++;
          (j_element['children'] as any).push(
            {
              text: d_element.DepartmentName,
              value: 'c'+this.c_counter.toString()  ,
              children: [] ,
              id: d_element.DepartmentID.toString()  ,
            }as never
            );
            d_element.DepartmentName ='fixed';
          }
      });
     
    });
  }
  console.log(this.json_obj);
  }
  

  ngOnInit(): void {
    
    //this.items = this.getItems([JSON.stringify(this.json_obj)]);
  }

  getItems(parentChildObj: any[]) {
    let itemsArray: TreeviewItem[] = [];
    parentChildObj.forEach((set: TreeItem) => {
      itemsArray.push(new TreeviewItem(set))
    });
    return itemsArray;
  }
}
