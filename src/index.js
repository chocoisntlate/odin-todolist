import './styles.css'

import item from './item.js'
import Project from './project.js'
import {displayProject} from './displayProject.js'
import {setupAllDialogButtons, createProject} from './dialogButtons.js'
import { ProjectManager } from './project-manager.js'
import { setUpAllPageButtons } from './pageButtons'
import { getProjectManager, resetProjectManager, storeProjectManager } from './storage.js'
import { displayProjectList, switchProject } from './displayProjectList.js'

// resetProjectManager()
console.log(JSON.stringify(getProjectManager));
let projectManager = getProjectManager()
if (!projectManager) {
    projectManager = new ProjectManager()
    let project1 = createProject("Project 1")

    let item1 = new item("finish the project", "yahoo", "2025-06-18", "High")
    let item2 = new item("get good", "do it now", "2025-06-19", "Medium")
    project1.addItem(item1);
    project1.addItem(item2);
    switchProject(project1)
    let button =  document.querySelector('.project-button')
    displayProject(project1)
    // button.classList.add('active') // manually adding active classlists
    } else {
        displayProject(projectManager.projectList[0])
        projectManager.setActiveProject(projectManager.projectList[0])

    }
setupAllDialogButtons()
setUpAllPageButtons()
displayProjectList()

export {projectManager}