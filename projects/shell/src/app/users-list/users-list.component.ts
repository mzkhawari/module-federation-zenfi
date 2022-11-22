import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpApiService } from 'projects/api-lib/src/lib/api-service/http-api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UserListComponent implements OnInit {


  @Output()
  onSelectUser: EventEmitter<number> =  new EventEmitter();
  
  constructor(private httpApi: HttpApiService) { }

  dataSource:any=[]
  ngOnInit(): void {
    debugger;
    this.httpApi.get("api/User/").subscribe(res=> {
      this.dataSource = res;
    });

    
  }

  showDetail(id:number){
    debugger;
    this.httpApi.selectedUser(id);
    this.onSelectUser.next(id);
  }

}
