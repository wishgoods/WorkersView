import { Component, OnInit, ViewChild } from '@angular/core';
import { TreeItem, TreeviewComponent, TreeviewItem } from 'ngx-treeview';
import { departments,department } from 'src/app/Interfaces/department';
import {departments_data as data} from '../../../assets/data/nested_departments.json';
import { PageComponent } from '../page-component/page.component';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  @ViewChild(TreeviewComponent)  treeView: TreeviewComponent | undefined;
  json_obj =[];
  items: any;
  get_departments : departments ; 
  departments:department[];
  c_counter:number=0;

  constructor(private pComp:PageComponent){ 

this.get_departments = new departments();
this.departments = this.get_departments.getDepartments();
let p_counter = 0 ;


this.departments.forEach(element => {
  if(element.ParentID == 0){
    p_counter++;
    this.json_obj.push(
      {
        text: element.DepartmentName ,
        value: 'c'+p_counter.toString() ,
        children: [],
        id: element.DepartmentID.toString() ,
      } as never
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

  }}
  
  ngOnInit(): void {

    let tree_data: TreeItem[]=[];
    data.forEach((element: { text: any; value: any; children: any; }) => {
      tree_data.push(
        {
          text: element.text ,
          value: element.value ,
          children: element.children
        } as never
      );
    });
    //console.log(tree_data);
    this.items = this.getItems(tree_data);
    //console.log(data);
  }

  getItems(parentChildObj: TreeItem[]) {
    let itemsArray: TreeviewItem[] = [];
    parentChildObj.forEach((set: TreeItem) => {
      itemsArray.push(new TreeviewItem(set,true))
    });
    return itemsArray;
  }

  onSelectedChange(item: Array<TreeviewItem>){
    
    const selectedIds = this.treeView!.selection.checkedItems.map(s => s.text);
    console.log(item);
    let final_item:any[]=[];
    this.json_obj.forEach(element => {
      (element['children'] as Array<any>).forEach(element2 => {
        
          
            if(selectedIds.includes( element2['text']))
            {
                final_item.push(element2['id']);
            }
       
      });
    });
    //console.log(final_item);
    this.pComp.departmentChanged(final_item);
  }
}