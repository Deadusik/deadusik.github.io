import { clearEditor } from "./editor/editor.js"
import { setEditorText } from "./editor/editor-utils.js"
import { helloText, someText, someText2 } from "./editor/text-data.js"

const DEFAULT_FILE_NAME = 'hello.txt'
let previousFileName = DEFAULT_FILE_NAME

export function initExplorer(explorer, relatedElements) {
    if (explorer) {
        const explorerElements = {
            title: explorer.querySelector('#explorer-title'),
            collapseButton: explorer.querySelector('button'),
            fileBlock: explorer.querySelector('#explorer-files')
        }

        // handlers
        const showExplorer = () => {
            relatedElements
                .filesButton
                .classList
                .toggle('sidebar-button--active')

            relatedElements
                .pageContent
                .classList
                .toggle('page__content--editor-full')
            explorer.classList.toggle('explorer--hidden')
        }

        const titleClickHandler = () => {
            explorerElements.title.classList.toggle('explorer-title-block--collapsed')
            explorerElements.fileBlock.classList.toggle('explorer-files--hidden')
        }

        const collapseClickHandler = (e) => {
            e.stopPropagation()
            const folders = explorerElements.fileBlock.querySelectorAll('.folder')
            folders.forEach(folder => folder.classList.add('folder--collapsed'))
        }

        const tabClickHandler = (e) => {
            const titleBlock = e.target.closest('.folder__title-block')
            const file = e.target.closest('.file')

            if (titleBlock) {
                const folder = titleBlock.closest('.folder')
                folder.classList.toggle('folder--collapsed')
            }

            if (file) {
                document.querySelectorAll('.file').forEach(file => file.classList.remove('file--selected'))
                file.classList.toggle('file--selected')

                const fileName = file.querySelector('.file__title')?.textContent.trim()

                if (fileName !== previousFileName) {
                    setEditorContent(fileName)
                    previousFileName = fileName

                    if (window.isMobile) showExplorer()
                }
            }
        }

        explorerElements.title.addEventListener('click', titleClickHandler)
        explorerElements.collapseButton.addEventListener('click', collapseClickHandler)
        explorer.addEventListener('click', tabClickHandler)
    }
}

function setEditorContent(fileName) {
    switch (fileName) {
        case 'hello.txt': {
            clearEditor()
            setEditorText(helloText, 10)
            break
        }
        case 'main info.txt': {
            clearEditor()
            setEditorText(someText, 10)
            break
        }
        case 'projects info.txt': {
            clearEditor()
            setEditorText(someText2, 10)
            break
        }
        default: {
            clearEditor()
            setEditorText('file name not found', 10)
        }
    }
}