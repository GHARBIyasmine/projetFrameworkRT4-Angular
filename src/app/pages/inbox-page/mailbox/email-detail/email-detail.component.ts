import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailServiceService, GroupNotification } from 'src/app/pages/inbox-page/email-service.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.css']
})


export class EmailDetailComponent implements OnInit {
  email: GroupNotification | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private emailService: EmailServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.emailService.getGroupNotificationById(+id).subscribe(email => {
          this.email = email;
        });
      }
    });
  }

  @ViewChild('publicGroupJoined') publicGroupJoinedTemplate!: TemplateRef<any>;
  @ViewChild('privateGroupJoinRequest') privateGroupJoinRequestTemplate!: TemplateRef<any>;
  @ViewChild('newTaskAdded') newTaskAddedTemplate!: TemplateRef<any>;


  getTemplateForEmail(email: any): TemplateRef<any> |null {
    if (email.type === 'publicGroupJoined') {
      return this.publicGroupJoinedTemplate;
    } else if (email.type === 'privateGroupJoinRequest') {
      return this.privateGroupJoinRequestTemplate;
    } else if (email.type === 'newTaskAdded') {
      return this.newTaskAddedTemplate;
    }
      return null;
  }


}
