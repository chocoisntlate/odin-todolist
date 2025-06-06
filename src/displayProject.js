import { format } from 'date-fns'
import {createInfoButton} from './item-info'

function displayProject(project) {
    let projectContent = document.getElementById("project-content")
    for (let item of project.items) {
        
        let itemContainer = document.createElement('div')
        itemContainer.setAttribute("class", "item-container")

        let title = document.createElement('span')
        title.textContent = item.title

        itemContainer.appendChild(title)
        itemContainer.appendChild(createInfoButton(item))

        projectContent.appendChild(itemContainer)
    }
}


 






export {displayProject}