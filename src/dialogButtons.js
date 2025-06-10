import { projectManager } from "./index.js"
import item from "./item"
import { displayProject } from "./displayProject"
import Project from "./project.js"
import { storeProjectManager } from "./storage.js"
import { displayProjectList } from "./displayProjectList.js"

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
        storeProjectManager()
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
        displayProjectList()
        storeProjectManager()
    })
}

export function createProject(projectName) {
    let projectBar = document.getElementById("project-bar")

    // javascript object project
    let projectObject = new Project(projectName)
    projectManager.addProject(projectObject)

    // dom stuff

    return projectObject
}


export {setupAllDialogButtons}