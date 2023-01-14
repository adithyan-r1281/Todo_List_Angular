import { formatCurrency } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoitem:string='';

  constructor(){
    // this.SystemDate=new Date;

  }
  // SystemDate:any;
  title = 'mytodo';
  tasks:any=[]
  newtask(content:any){

    if(content!=''){
      this.tasks.push({id:this.tasks.length,title:content.value})
      // console.log(this.tasks);
      
    }
    content.value='';
  }
  removetask(id:number){
    this.tasks=this.tasks.filter((item:{id:number})=>item.id!=id)
  }
  removeall(){
    this.tasks=[]
  }

}
