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

let item1 = new item("finish the project", "yahoo", "2025-06-18", "High")
let item2 = new item("get good", "do it now", "2025-06-19", "Medium")
project1.addItem(item1);
project1.addItem(item2);
switchProject(project1)
let button =  document.querySelector('.project-button')
button.classList.add('active') // manually adding active classlists

// Initialising a project manager

// Creation of button for the project


// Setting up button functions
setupAllDialogButtons()
setUpAllPageButtons()


console.log(projectManager.projectList);
export {projectManager}