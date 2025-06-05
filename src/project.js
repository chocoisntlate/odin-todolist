
class project{
    constructor() {
        this.items = []
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItemById(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
}