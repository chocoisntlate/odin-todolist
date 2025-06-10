import { projectManager } from "./index.js"
import item from "./item"
import { displayProject } from "./displayProject"
import Project from "./project.js"

function setupAllDialogButtons() {
    infoCloseButton()
    createTaskSubmitButton()
    createNewProjectSubmitButton()
}

function infoCloseButton() {
    let closeButton = document.getElementById("detail-close-button")
    let dialog = document.getElementById("item-details-dialog")
    
    closeButton.addEventListener('click', function(e) {
        dialog.close()
    })
}

function createTaskSubmitButton() {
    let createButton = document.getElementById("create-task-submit-button")
    let dialog = document.getElementById("create-task-dialog")

    let titleField = document.getElementById('title-input')
    let priorityField = document.getElementById('priority')
    let descriptionField = document.getElementById('description-input')
    let dateField = document.getElementById('due')

    console.log(projectManager.getActiveProject());
    createButton.addEventListener("click", function(e) {
        e.preventDefault()
        let activeProject = projectManager.getActiveProject()
        console.log(activeProject);
        activeProject.addItem(new item(titleField.value, descriptionField.value, dateField.value, priorityField.value))

        titleField.value = ""
        priorityField.value = ""
        descriptionField.value = ""
        dateField.value = ""

        displayProject(activeProject)

        dialog.close()
    })
    
}

function createNewProjectSubmitButton() {
    let button = document.getElementById('create-project-submit-button')
    let dialog = document.getElementById("create-project-dialog")
    let projectNameField = document.getElementById('project-name-input')

    button.addEventListener('click', function(e) {
        e.preventDefault()
        dialog.showModal()
        createProject(projectNameField.value)
        projectNameField.value = ""
        dialog.close()
    })
}

export function createProject(projectName) {
    let projectBar = document.getElementById("project-bar")

    // javascript object project
    let projectObject = new Project(projectName)
    projectManager.addProject(projectObject)

    // dom stuff
    let projectButton = document.createElement('div')
    projectButton.classList.add('button', 'project-button')
    projectButton.setAttribute('data-project-id', projectObject.id)
    
    let projectNameElement = document.createElement('span')
    projectNameElement.textContent = projectName

    let deleteButtonElement = createAttachingeDeleteProjectButton(projectButton, projectObject.id)


    projectButton.appendChild(projectNameElement)
    projectButton.appendChild(deleteButtonElement)

    projectButton.addEventListener('click', function(e) {
        activeClassHandling(projectButton)
        switchProject(projectObject)
        projectManager.setActiveProject(projectObject)

    })

    projectBar.appendChild(projectButton)
    return projectObject
    
}

export function switchProject(projectObject) {
    projectManager.setActiveProject(projectObject)
    displayProject(projectObject)

}

// Must be called before switching project
function activeClassHandling(newProjectButton) {
    let projectButtons = document.querySelectorAll('.project-button')
    projectButtons.forEach(button => button.classList.remove('active'))
    newProjectButton.classList.add("active")    
}

// this should be in the pageButtons but I already messed up. Didn't think that far ahead. 
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
    })

    return deleteButtonElement
}

export {setupAllDialogButtons}