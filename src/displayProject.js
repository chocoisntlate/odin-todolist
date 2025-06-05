import { format } from 'date-fns'

function displayProject(project) {
    for (let item of project.items) {
        let itemContainer = document.createElement('div')

        let title = document.createElement('div')
        title.textContent = item.title

        let description = document.createElement('div')
        description.textContent = item.description

        let due = document.createElement('div')
        due.textContent = format(item.due, 'dd-MM-yyyy')

        let priority = document.createElement('div')
        priority.textContent = item.priority

        itemContainer.appendChild(title)
        itemContainer.appendChild(description)
        itemContainer.appendChild(due)
        itemContainer.appendChild(priority)

        document.body.appendChild(itemContainer)
    }
}

export {displayProject}