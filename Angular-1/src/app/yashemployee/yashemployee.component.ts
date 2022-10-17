import { Component,OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";


@Component({ 
    // template:`<h1> Employee form </h1>`,
    templateUrl:'./yashemployee.component.html',
    selector:'app-employee',
})
export class yashEmployeeComponent implements OnInit{
    employeeForm :FormGroup;
    constructor(private formBuilder : FormBuilder){ }
   
    ngOnInit() {
        this.employeeForm = this.formBuilder.group({
            employeeFirstName:['',Validators.required],
            employeeLastName:['',Validators.required],
            address: this.formBuilder.group({
                city:[''],
                state:[''],
            }),
            
            hobbies: this.formBuilder.array([]),
        });
    }
   addHobby(){
    const hobby = this.employeeForm.controls["hobbies"] as FormArray;
    hobby.push(
        this.formBuilder.group({
            hobbyName:[''],
        })
    );
   }
submitEmployee(){
    console.log(this.employeeForm.value);
}

}