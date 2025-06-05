
class project{
    constructor(name) {
        this.name = name
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(item) {
        this.items.push(item);
    }

    deleteItemById(id) {
        this.items = this.items.filter(item => item.id !== id);
    }
}

export default project