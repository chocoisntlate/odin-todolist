import { storeProjectManager } from "./storage"

function createCheckbox(item, titleItem) {
    let checkBox = document.createElement('input')
    checkBox.setAttribute("type","checkbox")
    
    if (item.completed == true) {
        checkBox.setAttribute("checked", "")
        titleItem.classList.add('crossed-out')
    }

    checkBox.addEventListener('change', function(e) {
        item.toggleCompletion()
        renderCheckedness(titleItem)
        storeProjectManager()
    })
    return checkBox
}

function renderCheckedness(titleItem) {
    if (titleItem.classList.contains('crossed-out')) {
        titleItem.classList.remove('crossed-out')
    } else {
        titleItem.classList.add('crossed-out')
    }
}

export {createCheckbox}