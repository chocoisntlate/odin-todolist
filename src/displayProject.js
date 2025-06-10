import { format } from 'date-fns'
import {createInfoButton} from './item-info'
import {createCheckbox} from './item-complete'
import { createDeleteButton } from './item-delete'

function displayProject(project) {
    let projectContent = document.getElementById("project-content")
    projectContent.textContent = ""

    if (project == null) {
        return
    }

    for (let item of project.items) {
        let itemContainer = document.createElement('div')
        itemContainer.setAttribute("class", "item-container")

        let title = document.createElement('span')
        title.textContent = item.title

        let infoButton = createInfoButton(item)

        let checkBox = createCheckbox(item, title)
        
        let binButton = createDeleteButton(project, item)

        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(infoButton)
        itemContainer.appendChild(title)
        itemContainer.appendChild(binButton)

        projectContent.appendChild(itemContainer)
    }
}


 






export {displayProject}