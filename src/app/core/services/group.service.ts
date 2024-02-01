import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, EMPTY, Observable, Subject,  catchError,  of, tap } from 'rxjs';
import { NewGroupDto, group, joinedGroupDto } from 'src/app/core/models/group.models';
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

  private groupLeftSubject = new Subject<number>();
  groupLeft$ = this.groupLeftSubject.asObservable();

  // private groupDeletedSubject = new Subject<GroupInitialInfoI>();
  // groupJoined$ = this.groupJoinedSubject.asObservable();
  
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
      }),
      tap(
        () => this.toastr.success('group created successfully :)')
      ),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );
  }

  joinGroupByCode(groupCredentails: joinedGroupDto): Observable<GroupInitialInfoI>{
    return this.httpClient.post<GroupInitialInfoI>(`${this.API}/join-code`, groupCredentails)
    .pipe(
      tap((newGroup: GroupInitialInfoI) => {
        this.groupAddedSubject.next(newGroup);
      }),
      tap(
        () => this.toastr.success('group joined successfully :)')
      ),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );
  }

  joinPublicGroup(id : number): Observable<GroupInitialInfoI>{
    return this.httpClient.post<GroupInitialInfoI>(`${this.API}/join-public/${id}`, null)
    .pipe(
      tap((newGroup: GroupInitialInfoI) => {
        this.groupAddedSubject.next(newGroup);
      }),
      tap(
        () => this.toastr.success('group joined successfully :)')
      ),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    );
  }
  
  leaveGroup(groupid: number):Observable<boolean>{
    
    return this.httpClient.post<boolean>(`${this.API}/leave/${groupid}`,null)
    .pipe(
      tap(
        () => this.toastr.success('Attempt to leave successfull :)')
      ),
      tap(()=>{
        this.groupLeftSubject.next(groupid)
      }),
      catchError(e => {
        this.toastr.error(`${e.error.message}`);
        return EMPTY
      })
    )

  }


  getPublicGroupsWhereUserNotPartOf():Observable<group[]>{
      return this.httpClient.get<group[]>(`${this.API}/public-groups`)
  }

  getAllGroupCommunityUsernames(id: number): Observable<string[]>{

    return this.httpClient.get<string[]>(`${this.API}/all-usernames/${id}`)

  }
}
