

class item {
    constructor(title, description, due, priority) {
        this.title = title
        this.description = description
        this.due = due
        this.priority = priority

        this.completed = false;
        this.itemID = crypto.randomUUID();
    }

    toggleCompletion() {
        if (this.completed == false) {
            this.completed = true
        } else {
            this.completed = false
        }
    }
}


export default item;