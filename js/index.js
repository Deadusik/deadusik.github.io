import { setEditorText } from "./editor/editor-utils.js";
import { initEditor } from "./editor/editor.js";
import { easterEggText, someText } from "./editor/text-data.js";
import { initExplorer } from "./explorer.js";

main()

function main() {


    initApp()

    setEditorText(someText, 10)
}

function initApp() {
    const editor = document.getElementById('editor')

    const explorerElements = {
        explorer: document.getElementById('explorer'),
        title: explorer.querySelector('#explorer-title'),
        collapseButton: explorer.querySelector('button'),
        fileBlock: explorer.querySelector('#explorer-files')
    }

    initEditor(editor)
    initExplorer(explorerElements.explorer, editor)

    const page = document.getElementById('page')
    const icon = document.getElementById('icon')
    const pageContent = page.firstElementChild
    const filesButton = document.getElementById('files')

    const iconClickHandler = () => {
        setEditorText(easterEggText, 2)
        icon.removeEventListener('click', iconClickHandler)
    }

    const explorerTitleClickHandler = () => {
        explorerElements.title.classList.toggle('explorer-title-block--collapsed')
        explorerElements.fileBlock.classList.toggle('explorer-files--hidden')
    }

    const explorerCollapseClickHandler = (e) => {
        e.stopPropagation()
        const folders = explorerElements.fileBlock.querySelectorAll('.folder')
        folders.forEach(folder => folder.classList.add('folder--collapsed'))
    }

    icon.addEventListener('click', iconClickHandler)
    explorerElements.title.addEventListener('click', explorerTitleClickHandler)
    explorerElements.collapseButton.addEventListener('click', explorerCollapseClickHandler)

    // hide/show explorer
    filesButton.addEventListener('click', () => {
        filesButton.classList.toggle('sidebar-button--active')
        pageContent.classList.toggle('page__content--editor-full')
        explorer.classList.toggle('explorer--hidden')
    })
}