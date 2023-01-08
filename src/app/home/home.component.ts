import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: any;
  constructor(private apiservice: ApiService){}

    ngOnInit():void{
      this.getAllUsers();
    }

    getAllUsers(){
      this.apiservice.getAllData().subscribe((res)=>{
        this.users = res.data;
        console.log(this.users);
      });
    }

}
