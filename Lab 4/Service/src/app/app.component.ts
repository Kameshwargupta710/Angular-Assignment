import { Component,OnInit } from '@angular/core';
import { UserService } from './app.service';
import { DataStruct } from './DataStruct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 public datalist:DataStruct[] = [];
  constructor(private user:UserService){}

  ngOnInit(){
    this.user.getData().subscribe(data => this.datalist=data);
  }


}
