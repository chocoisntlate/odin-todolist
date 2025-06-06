function createCheckbox(titleItem) {
    let checkBox = document.createElement('input')
    checkBox.setAttribute("type","checkbox")
    checkBox.addEventListener('change', () => renderCheckedness(titleItem))
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