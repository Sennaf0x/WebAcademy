export type Reminder = [string, Date, Date?, string?];

export class ReminderList {
    private reminders: Reminder[] = [];

    addReminder(title: string, insertionDate: Date, dueDate?: Date, description?: string) {
        const newReminder: Reminder = [title, insertionDate, dueDate, description];
        this.reminders.push(newReminder);
    }

    editReminder(index: number, updatedReminder: Reminder) {
        if (index >= 0 && index < this.reminders.length) {
            this.reminders[index] = updatedReminder;
        } else {
            console.error("Índice inválido");
        }
    }

    deleteReminder(index: number) {
        if (index >= 0 && index < this.reminders.length) {
            this.reminders.splice(index, 1);
        } else {
            console.error("Índice inválido");
        }
    }

    getReminders() {
        return this.reminders;
    }
}