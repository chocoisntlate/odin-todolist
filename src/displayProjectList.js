import { projectManager } from "./index.js"
import { displayProject } from "./displayProject"
import { storeProjectManager } from "./storage"

function displayProjectList() {
    let projectBar = document.getElementById("project-list-content")
    projectBar.textContent = ""
    let activeProject = projectManager.getActiveProject()

    for (let projectObject of projectManager.projectList) {
        let projectButton = document.createElement('div')
        projectButton.classList.add('button', 'project-button')
        projectButton.setAttribute('data-project-id', projectObject.id)
        
        let projectNameElement = document.createElement('span')
        projectNameElement.textContent = projectObject.name

        let deleteButtonElement = createAttachingeDeleteProjectButton(projectButton, projectObject.id)


        projectButton.appendChild(projectNameElement)
        projectButton.appendChild(deleteButtonElement)

        projectButtonEventListener(projectButton, projectObject)

    // setting active project when refresh
        if (activeProject == projectObject) {
            activeClassHandling(projectButton)
        }

        projectBar.appendChild(projectButton)
    }

    
}

function projectButtonEventListener(projectButton, projectObject) {
        projectButton.addEventListener('click', function(e) {
            activeClassHandling(projectButton)
            switchProject(projectObject)
            projectManager.setActiveProject(projectObject)
            storeProjectManager()
        })
}

function createAttachingeDeleteProjectButton(projectButton, projectId) {
    let deleteButtonElement = document.createElement('button')
    deleteButtonElement.classList.add("project-delete-button")
    deleteButtonElement.textContent = "x"

    deleteButtonElement.addEventListener('click', function(e) {
        e.stopPropagation()
        console.log(projectId);
        projectManager.deleteProjectByID(projectId)
        console.log(projectManager.projectList);
        projectButton.remove()
        displayProject(null)
        storeProjectManager()
    })

    return deleteButtonElement
}

function activeClassHandling(newProjectButton) {
    let projectButtons = document.querySelectorAll('.project-button')
    projectButtons.forEach(button => button.classList.remove('active'))
    newProjectButton.classList.add("active")    
}


export function switchProject(projectObject) {
    projectManager.setActiveProject(projectObject)
    displayProject(projectObject)

}

export {displayProjectList}