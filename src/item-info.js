import infoIcon from './assets/information-1535-svgrepo-com.svg';

function createInfoButton(item) {
    let i = document.createElement('img')
    i.src = infoIcon
    i.setAttribute("class", "i-svg")
    i.addEventListener('click', () => displayInfo(item))
    return i
}

function displayInfo(item) {
    let name = document.getElementById("name-detail-text")
    let priority = document.getElementById("priority-detail-text")
    let description = document.getElementById("description-detail-text")
    let dueDate = document.getElementById("due-detail-text")
    
    name.textContent = item.title
    priority.textContent = item.priority
    description.textContent = item.description
    dueDate.textContent = item.due

    document.getElementById("item-details-dialog").showModal()
}

export {createInfoButton}

