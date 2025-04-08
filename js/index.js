import { initEditor } from "./editor/editor.js";
import { initExplorer } from "./explorer.js";
import { setEditorText } from "./editor/editor-utils.js";
import { easterEggText, helloText } from "./editor/text-data.js";

import {
    PAGE_EDITOR__ACTIVE,
    PAGE_EXPLORER__ACTIVE,
    EXPLORER__DISABLED,
    EDITOR__DISABLED,
    FILES_BUTTON__ACTIVE,
} from "./selectors.js";

main()

function main() {
    initApp()
    setEditorText(helloText, 5)
}

function initApp() {
    // general elements
    const editor = document.getElementById('editor')
    const explorer = document.getElementById('explorer')
    // elements
    const page = document.getElementById('page')
    const icon = document.getElementById('icon')
    const pageContent = page.firstElementChild
    const filesButton = document.getElementById('files')
    const editorTextArea = editor.querySelector('#text-area')

    window.isMobile = checkIsMobile()
    if (window.isMobile) {
        setContentByMobile(true)
    }

    initEditor(editorTextArea)

    const explorerRelatedElements = {
        pageContent,
        filesButton,
        editor
    }
    initExplorer(explorer, explorerRelatedElements)

    // handlers
    const iconClickHandler = () => {
        setEditorText(easterEggText, 2)
        icon.removeEventListener('click', iconClickHandler)
    }

    const showExplorerHandler = () => {
        filesButton.classList.toggle(FILES_BUTTON__ACTIVE)
        if (window.isMobile) {
            explorer.classList.toggle(EXPLORER__DISABLED)
            editor.classList.toggle(EDITOR__DISABLED)
            pageContent.classList.toggle(PAGE_EXPLORER__ACTIVE)
        } else {
            explorer.classList.toggle(EXPLORER__DISABLED)
            pageContent.classList.toggle(PAGE_EDITOR__ACTIVE)
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

    // set behavior for explorer by window size
    function setContentByMobile(isMobile) {
        if (isMobile) {
            // set full-size text area by default
            filesButton.classList.remove(FILES_BUTTON__ACTIVE)
            pageContent.classList.add(PAGE_EDITOR__ACTIVE)
            explorer.classList.add(EXPLORER__DISABLED)
        } else {
            // back to desktop page config (default config)
            pageContent.classList.remove(PAGE_EDITOR__ACTIVE)
            pageContent.classList.remove(PAGE_EXPLORER__ACTIVE)
            explorer.classList.remove(EXPLORER__DISABLED)
            filesButton.classList.add(FILES_BUTTON__ACTIVE)
        }
    }
}

function checkIsMobile() {
    const SMALL_WIDTH = 480
    const width = window.innerWidth

    if (width <= SMALL_WIDTH) {
        return true
    }

    return false
}