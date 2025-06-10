import Project from "./project"

export class ProjectManager{
    constructor() {
        this.projectList = []
        this.activeProject;
    }

    addProject(projectObject) {
        this.projectList.push(projectObject)

    }

    getActiveProject() {
        return this.activeProject
    }

    setActiveProject(project) {
        this.activeProject = project
    }

    deleteProjectByID(projectId) {
        this.projectList = this.projectList.filter(project => project.id !== projectId);
        if (!this.projectList.includes(this.activeProject)) {
            this.activeProject = null;
        }
    }

}
