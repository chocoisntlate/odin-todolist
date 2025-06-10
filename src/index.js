import './styles.css'

import item from './item.js'
import Project from './project.js'
import {displayProject} from './displayProject.js'
import setupAllDialogButtons from './dialogButtons.js'
import { ProjectManager } from './project-manager.js'
import { setUpAllPageButtons } from './pageButtons'



// Example project and items
let project1 = new Project("project1")
let item1 = new item("finish the project", "do it now", "2025-06-18", "high")
let item2 = new item("finish the project2", "do it now", "2025-06-18", "high")
project1.addItem(item1);
project1.addItem(item2);

// Initialising a project manager
let projectManager = new ProjectManager(project1)

// Setting up button functions
setupAllDialogButtons()
setUpAllPageButtons()


displayProject(project1)

export {projectManager}