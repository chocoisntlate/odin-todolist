import Project from "./project"
import { ProjectManager } from "./project-manager"
import { projectManager } from "./index.js";
import item from "./item";

function getProjectManager() {
    let parsedObject = JSON.parse(localStorage.getItem('project-manager'));
    if (!parsedObject) return null;

    // Restore ProjectManager instance
    let restoredManager = Object.assign(new ProjectManager(), parsedObject);

    restoredManager.projectList = restoredManager.projectList.map(projectObj => {
        let restoredProject = Object.assign(new Project(), projectObj);
        restoredProject.items = (projectObj.items || []).map(itemObj => Object.assign(new item(), itemObj));
        return restoredProject;
    });

    return restoredManager;
}

function storeProjectManager() {
    localStorage.setItem('project-manager', JSON.stringify(projectManager))
}

function resetProjectManager() {
    localStorage.setItem('project-manager', null)
}

export {getProjectManager, storeProjectManager, resetProjectManager}