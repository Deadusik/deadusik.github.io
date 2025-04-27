import { initEditor } from "./editor/editor.js";
import { initExplorer } from "./explorer.js";
import { writeEditorText } from "./editor/editor-utils.js";
import { checkIsMobile, getFileTextByMobile } from "./utils.js";
import {
    PAGE_EDITOR__ACTIVE,
    PAGE_EXPLORER__ACTIVE,
    EXPLORER__DISABLED,
    EDITOR__DISABLED,
    FILES_BUTTON__ACTIVE,
    PAGE_CONTENT_PRELOAD,
} from "./selectors.js";
import { helloFile } from "./editor/files.js";
import { initAdditionalElements } from "./additional-elements.js";


main()

function main() {
    initApp()
    const adaptiveText = getFileTextByMobile(helloFile)
    writeEditorText(adaptiveText, 1)
}

function initApp() {
    // general elements
    const page = document.getElementById('page')
    const editor = document.getElementById('editor')
    const explorer = document.getElementById('explorer')
    // elements
    const pageContent = page.firstElementChild
    const filesButton = document.getElementById('files')
    const editorTextArea = editor.querySelector('#text-area')

    window.isMobile = checkIsMobile()
    if (window.isMobile) {
        setContentByMobile(true)
    }
    // set mobile or desctop layout, 
    // then show page content
    pageContent.classList.remove(PAGE_CONTENT_PRELOAD)

    initEditor(editorTextArea)

    const explorerRelatedElements = {
        pageContent,
        filesButton,
        editor
    }
    initExplorer(explorer, explorerRelatedElements)
    initAdditionalElements()

    // handlers
    // toggle explorer visibility
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

    // set explorer behavior by window size
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

