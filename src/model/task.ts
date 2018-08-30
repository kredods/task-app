import { Subtask } from './subtask';
export class Task {
    id: number
    name: string;
    subtasks: Subtask[];

    constructor(id: number, name: string, subtasks: Subtask[]) {
        this.id = id;
        this.name = name;
        this.subtasks = subtasks;
    }

    addSubtask(subtask: Subtask) {
        this.subtasks.push(subtask);
    }

    deleteSubtask(subtask: Subtask) {
        this.subtasks.splice(this.subtasks.findIndex(s => s.title === subtask.title), 1);
    }

    isDuplicate(title: string): boolean {
        return this.subtasks.find(s => s.title === title) != null;
    }
}