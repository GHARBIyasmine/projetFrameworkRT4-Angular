
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