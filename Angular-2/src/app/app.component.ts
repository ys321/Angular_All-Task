import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Yash_angular2';
  isnewclassapply:boolean = true;
  studentname:string;
  newclasses : Record<string,string> = {};

  ngOnInit(){
    this.isnewclassapply = !this.isnewclassapply;
    this.setclasses();
    this.studentname = "Yash";
  }

  setclasses(){
    this.newclasses = {
      color : 'blue',
      'font-style' : 'italic'
    };
  }

  toLowerCase(name:string){
    this.studentname = this.studentname.toLowerCase();
  }
}
