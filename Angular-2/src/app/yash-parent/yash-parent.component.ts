import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yash-parent',
  templateUrl: './yash-parent.component.html',
  styleUrls: ['./yash-parent.component.css']
})
export class YashParentComponent implements OnInit {
  messagetosendparent:string ='';
  constructor() { }

  ngOnInit(): void {
  }
  sendtochild(message:string){
    this.messagetosendparent = message;
  }

}
