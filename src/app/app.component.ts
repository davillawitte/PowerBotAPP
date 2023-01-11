import { Component } from '@angular/core';
import { ApiService } from './api.service';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PowerBotAPP';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

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
