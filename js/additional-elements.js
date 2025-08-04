import { scrollEditorToBottom, writeEditorText } from "./editor/editor-utils.js"
import { easterEggText } from "./editor/text-data.js"

// icon variables
const icon = document.getElementById('icon')
const iconTrigger = 3
let iconClicks = 0
// close button
const closeButton = document.getElementById('close')
// warnings && errors
const errorWarning = document.getElementById('error-warning')
const errorText = document.getElementById('error-text')
let errors = 0
// editor
let keyPressedCount = 0
const keyTrigger = 3
// title 
const title = document.getElementById('title')
// notification
const notification = document.getElementById('notification')

export function initAdditionalElements() {
    const iconClickHandler = () => {
        iconClicks++

        if (iconClicks === iconTrigger) {
            writeEditorText(easterEggText.icon, 0)
            setTimeout(scrollEditorToBottom, 100)
            icon.removeEventListener('click', iconClickHandler)
        }
    }

    const closeButtonHandler = () => {
        const randomPhrase = getRandomPhrase(easterEggText.close)
        writeEditorText(randomPhrase)
        setTimeout(scrollEditorToBottom, 100)
        errors++
        errorText.textContent = errors
    }

    const errorWarningHandler = () => {
        if (errors) {
            writeEditorText(easterEggText.error)
            setTimeout(scrollEditorToBottom, 100)
            errorWarning.removeEventListener('click', errorWarningHandler)
        }
        else {
            writeEditorText(easterEggText.ok)
            setTimeout(scrollEditorToBottom, 100)
        }
    }

    const keydownHandler = () => {
        keyPressedCount++;

        if (keyPressedCount === keyTrigger) {
            writeEditorText(easterEggText.typing)
            setTimeout(scrollEditorToBottom, 100)
        }
    }

    const titleHandler = () => {
        writeEditorText(easterEggText.title)
        setTimeout(scrollEditorToBottom, 100)
    }

    const notificationHandler = () => {
        writeEditorText(easterEggText.notification)
        setTimeout(scrollEditorToBottom, 100)
        notification.removeEventListener('click', notificationHandler)
    }

    // set listeners
    document.addEventListener('keydown', keydownHandler)
    closeButton.addEventListener('click', closeButtonHandler)
    icon.addEventListener('click', iconClickHandler)
    errorWarning.addEventListener('click', errorWarningHandler)
    title.addEventListener('click', titleHandler)
    notification.addEventListener('click', notificationHandler)
}

function getRandomPhrase(phrases) {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
}