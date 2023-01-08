import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PowerBotAPP';

  // ngOnInit()void{

  // }
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
