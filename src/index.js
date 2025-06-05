import './styles.css'

import item from './item.js'
import project from './project.js'
import {displayProject} from './displayProject.js'


let project1 = new project("project1")
let item1 = new item("finish the project", "do it now", new Date(2025, 5, 20), "high")
let item2 = new item("finish the project", "do it now", new Date(2025, 5, 20), "high")
project1.addItem(item1);
project1.addItem(item2);

console.log(project1.getItems())
displayProject(project1)