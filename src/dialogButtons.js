function setupAllDialogButtons() {
    infoCloseButton()
}

function infoCloseButton() {
    let closeButton = document.getElementById("detail-close-button")
    let dialog = document.getElementById("item-details-dialog")
    
    closeButton.addEventListener('click', function(e) {
        dialog.close()
    })
}

export default setupAllDialogButtons