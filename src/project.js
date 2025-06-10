
class Project{
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

    deleteItemByID(id) {
        console.log("hi");
        this.items = this.items.filter(item => item.ID !== id);
    }
}

export default Project