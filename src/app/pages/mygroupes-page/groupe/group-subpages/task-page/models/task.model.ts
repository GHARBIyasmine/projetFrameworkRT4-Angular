
import { TaskStatus } from "./taskStatus.model";

export class Task {
    constructor(
        public id: number,
        public taskDescription: string,
        public assignee : string | '',
        public taskDate: Date ,//string | null,
        public taskSatus: TaskStatus

        ) {}
}

export interface TaskDto {
    id?: number
    description: string
    assignee :string
    dueDate: Date
    
}

export interface TaskI{
    id: number
    description: string
    assignedTo :{
        username: string
    }
    dueDate: Date
    status: string
}



