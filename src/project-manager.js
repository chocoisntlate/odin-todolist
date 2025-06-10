export class ProjectManager{
    constructor(project) {
        this.projectList = [project]
        this.activeProject = project
    }

    addProject() {

    }

    getActiveProject() {
        return this.activeProject
    }

    setActiveProject(project) {
        this.activeProject = project
    }

}
