import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: any;
  constructor(private apiservice: ApiService){}

    ngOnInit():void{
      this.getAllUsers();
    }

    getAllUsers(){
      this.apiservice.getAllData().subscribe((res)=>{
        this.users = res.data;
        // console.log(this.users);
      });
    }

    removeUser(id:number){
      this.apiservice.deleteUser(id).subscribe((res)=>{
        //after delete get rest data
        this.getAllUsers();
      });
    }

}
