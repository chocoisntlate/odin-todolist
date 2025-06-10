import { projectManager } from "."
import binIcon from "./assets/bin-svgrepo-com.svg"
import { displayProject } from "./displayProject"
import { storeProjectManager } from "./storage"


function createDeleteButton(project, item) {
    let i = document.createElement('img')
    i.src = binIcon
    i.setAttribute("class", "bin-svg")
    i.addEventListener('click', () => deletionActions(project, item))
    return i
}

function deletionActions(project, item) {
    project.deleteItemByID(item.ID)
    projectManager.setActiveProject(projectManager.projectList[0])
    displayProject(project)
    storeProjectManager()
}



export {createDeleteButton}