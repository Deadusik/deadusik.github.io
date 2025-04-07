import { setEditorText } from "./editor/editor-utils.js";
import { initEditor } from "./editor/editor.js";
import { easterEggText, helloText } from "./editor/text-data.js";
import { initExplorer } from "./explorer.js";

main()

function main() {
    initApp()
    setEditorText(helloText, 10)
}

function initApp() {
    window.isMobile = checkIsMobile()

    // general elements
    const editor = document.getElementById('editor')
    const explorer = document.getElementById('explorer')

    // elements
    const page = document.getElementById('page')
    const icon = document.getElementById('icon')
    const pageContent = page.firstElementChild
    const filesButton = document.getElementById('files')
    const editorTextArea = editor.querySelector('#text-area')
    const explorerRelatedElements = {
        pageContent,
        filesButton,
        editor
    }

    if (window.isMobile) {
        filesButton.classList.remove('sidebar-button--active')
        setContentByMobile(true)
    }

    initEditor(editorTextArea)
    initExplorer(explorer, explorerRelatedElements)

    // handlers
    const iconClickHandler = () => {
        setEditorText(easterEggText, 2)
        icon.removeEventListener('click', iconClickHandler)
    }

    const showExplorerHandler = () => {
        filesButton.classList.toggle('sidebar-button--active')
        if (window.isMobile) {
            explorer.classList.toggle('explorer--hidden')
            editor.classList.toggle('editor--hidden')
            pageContent.classList.toggle('page__content--explorer-full')
        } else {
            explorer.classList.toggle('explorer--hidden')
            pageContent.classList.toggle('page__content--editor-full')
        }
    }

    const resizeHandler = () => {
        window.isMobile = checkIsMobile()
        setContentByMobile(window.isMobile)
    }

    // set listeners
    window.addEventListener('resize', resizeHandler)
    filesButton.addEventListener('click', showExplorerHandler)
    icon.addEventListener('click', iconClickHandler)

    function setContentByMobile(isMobile) {
        if (isMobile) {
            filesButton.classList.remove('sidebar-button--active')
            pageContent.classList.add('page__content--editor-full')
            explorer.classList.add('explorer--hidden')
        } else {
            pageContent.classList.remove('page__content--editor-full')
            pageContent.classList.remove('page__content--explorer-full')
            explorer.classList.remove('explorer--hidden')
            filesButton.classList.add('sidebar-button--active')
        }
    }
}

function checkIsMobile() {
    const SMALL = 480
    const width = window.innerWidth

    if (width <= 480) {
        return true
    }

    return false
}