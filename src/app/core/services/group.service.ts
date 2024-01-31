import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, of, tap } from 'rxjs';
import { NewGroupDto } from 'src/app/core/models/group.models';
import { GroupType } from 'src/app/core/models/groupType.model';
import { conf } from 'src/environement';

export interface GroupInitialInfoI {
  id : number
  name: string
  type: string
}
@Injectable({
  providedIn: 'root'
})
export class GroupService {
  
  private API = `${conf.Backend_API}/groups`
  private groupAddedSubject = new Subject<GroupInitialInfoI>();

  groupAdded$ = this.groupAddedSubject.asObservable();
  
  constructor(
    private httpClient: HttpClient,
    private toastr: ToastrService,
  ) { }


  getAllGroupsByUser(): Observable<GroupInitialInfoI[]>{
    return this.httpClient.get<GroupInitialInfoI[]>(`${this.API}/all`)

  }

  createNewGroup(group : NewGroupDto ): Observable<GroupInitialInfoI>{

    return this.httpClient.post<GroupInitialInfoI>(`${this.API}/new`, group)
    .pipe(
      tap((newGroup: GroupInitialInfoI) => {
        this.groupAddedSubject.next(newGroup);
      })
    );
  }

  
  
}
