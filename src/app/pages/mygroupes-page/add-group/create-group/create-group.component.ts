import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../../../core/services/group.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { Tag } from '../models/tags.model';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  formData = {
    name: '',
    description: '',
    tags: []as Tag[],
    type: 'Public', 
  };

  constructor(public dialogRef: MatDialogRef<CreateGroupComponent>,
    private groupService: GroupService) {}

  submitForm(form: NgForm): void {
    if (form.valid) {
      
      this.formData.tags=this.tags
      this.groupService.createNewGroup(this.formData).subscribe();
      this.close()
    }
    }

  close(): void {
    this.dialogRef.close();
  }


  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim().toLowerCase();

    // Add unique tag 
    if (value && !this.tags.some(tag => tag.value === value)) {
      this.tags.push({value: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].value = value;
    }
  }
}
