import { format } from 'date-fns'
import {createInfoButton} from './item-info'
import {createCheckbox} from './item-complete'

function displayProject(project) {
    let projectContent = document.getElementById("project-content")
    for (let item of project.items) {
        
        
        let itemContainer = document.createElement('div')
        itemContainer.setAttribute("class", "item-container")

        let title = document.createElement('span')
        title.textContent = item.title

        let infoButton = createInfoButton(item)

        let checkBox = createCheckbox(title)

        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(title)
        itemContainer.appendChild(infoButton)

        projectContent.appendChild(itemContainer)
    }
}


 






export {displayProject}