import './styles.css'

import item from './item.js'
import Project from './project.js'
import {displayProject} from './displayProject.js'
import {setupAllDialogButtons, createProject} from './dialogButtons.js'
import { ProjectManager } from './project-manager.js'
import { setUpAllPageButtons } from './pageButtons'
import { switchProject } from './dialogButtons.js'


let projectManager = new ProjectManager()

// Example project and items
let project1 = createProject("Project 1")

let item1 = new item("finish the project", "do it now", "2025-06-18", "high")
let item2 = new item("finish the project2", "do it now", "2025-06-18", "high")
project1.addItem(item1);
project1.addItem(item2);
switchProject(project1)

// Initialising a project manager

// Creation of button for the project


// Setting up button functions
setupAllDialogButtons()
setUpAllPageButtons()


console.log(projectManager.projectList);
export {projectManager}