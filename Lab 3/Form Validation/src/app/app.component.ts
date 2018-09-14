import { Component,OnInit,NgModule} from '@angular/core';
import { Validators, FormGroup, FormControl,FormsModule,ReactiveFormsModule,FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  category="";

  productForm:FormGroup;
  pid:FormControl;
  pname:FormControl;
  pcost:FormControl;
  ponline:FormControl;
  pcategory:FormControl;
  pstore:FormControl;


  ngOnInit(){
    this.createFormControls();
    this.createForm();
  }

  createFormControls(){
    this.pid= new FormControl('',Validators.required);
    this.pname= new FormControl('',Validators.required);
    this.pcost= new FormControl('',Validators.required);
    this.ponline= new FormControl('',Validators.required);
    this.pcategory= new FormControl('',Validators.required);
    this.pstore= new FormControl('',Validators.required);
  }


  createForm(){
    this.productForm=new FormGroup({
      pid:this.pid,
      pname:this.pname,
      pcost:this.pcost,
      ponline:this.ponline,
      pcategory:this.pcategory,
      pstore:this.pstore
    })
  }

  


  onSubmit(){
    if(this.productForm.valid){
      console.log(this.productForm.value);
    }
    else{
      alert("Please Enter Valid Data.");
    }
  }

  
}
