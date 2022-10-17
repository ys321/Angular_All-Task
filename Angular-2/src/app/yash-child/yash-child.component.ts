import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './yash-child.component.html',
  styleUrls: ['./yash-child.component.css']
})
export class YashChildComponent implements OnInit {
  @Input() receivedparentmsg:string;
  constructor() { }

  ngOnInit(): void {
  }

}
