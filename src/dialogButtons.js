import { projectManager } from "./index.js"
import item from "./item"
import { displayProject } from "./displayProject"

function setupAllDialogButtons() {
    infoCloseButton()
    createTaskSubmitButton()
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
        let activeProject = projectManager.getActiveProject()
        console.log(activeProject);
        activeProject.addItem(new item(titleField.value, descriptionField.value, dateField.value, priorityField.value))
        displayProject(activeProject)

        dialog.close()
    })
    
}

export default setupAllDialogButtons