import { Component, OnInit } from '@angular/core';
import {departments_data as data} from '../../../assets/data/nested_departments.json';
import { PageComponent } from '../page-component/page.component';

@Component({
  selector: 'app-treeview',
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})

export class TreeviewComponent implements OnInit {
 
  departments: any[] = data;
  parent_clicked:boolean = false;
  constructor(private pComp:PageComponent){ }
  clicked_parents:any[] = [];
  ngOnInit(): void {

  }
  selectDepartment(e:any)
  {
    //console.log(e.target.innerText);
    let id :any[]=[];
    let b =false;
    if(this.clicked_parents.includes(e.target.innerText))
    {
        b=true;
    }
    data.forEach(element => {
      if(element.text == e.target.innerText)
      {
        this.clicked_parents.push(e.target.innerText);
         id.push(element.id);
         
         if(element.children.length>0)
         {
          
            element.children.forEach(element2 => {
            id.push(element2.id)});

         }        
      }
      
      
    
    });
    if(id.length==0)
    {
      data.forEach(element => {
           if(element.children.length>0)
           {
            
              element.children.forEach(element2 => {
              
              if(element2.text == e.target.innerText){ 
                id.push(element2.id);
                this.clicked_parents.push(element.text);
              }});
           }        
        
    });
  }
    if(b)
    {
      this.clicked_parents= this.clicked_parents.filter((x)=>{
        x != e.target.innerText;
      });
    }
    this.pComp.departmentChanged(id);
  }
  checkClicked(dep_name:any){

      return this.clicked_parents.includes(dep_name);

  }

}