export class ReminderList {
    constructor() {
        this.reminders = [];
    }
    addReminder(title, insertionDate, dueDate, description) {
        const newReminder = [title, insertionDate, dueDate, description];
        this.reminders.push(newReminder);
    }
    editReminder(index, updatedReminder) {
        if (index >= 0 && index < this.reminders.length) {
            this.reminders[index] = updatedReminder;
        }
        else {
            console.error("Índice inválido");
        }
    }
    deleteReminder(index) {
        if (index >= 0 && index < this.reminders.length) {
            this.reminders.splice(index, 1);
        }
        else {
            console.error("Índice inválido");
        }
    }
    getReminders() {
        return this.reminders;
    }
}
