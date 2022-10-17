import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular1';
  constructor(private router :Router){

  }
  submitEmployee(){
    this.router.navigate(['employee']);
    console.log(this.router.config);
  }
}
