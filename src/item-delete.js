import binIcon from "./assets/bin-svgrepo-com.svg"
import { displayProject } from "./displayProject"

function createDeleteButton(project, item) {
    let i = document.createElement('img')
    i.src = binIcon
    i.setAttribute("class", "bin-svg")
    i.addEventListener('click', () => deletionActions(project, item))
    return i
}

function deletionActions(project, item) {
    project.deleteItemByID(item.ID)
    displayProject(project)
}



export {createDeleteButton}