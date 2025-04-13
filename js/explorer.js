import { clearEditor } from "./editor/editor.js"
import { setNewEditorText, writeEditorText } from "./editor/editor-utils.js"
import {
    PAGE_EDITOR__ACTIVE,
    PAGE_EXPLORER__ACTIVE,
    EDITOR__DISABLED,
    EXPLORER__DISABLED,
    EXPLORER_TITLE_ARROW__DISABLED,
    EXPLORER_FILES__DISABLED,
    FOLDER__DISABLED,
    FILE__ACTIVE,
    FILES_BUTTON__ACTIVE,
} from "./selectors.js"
import { setTabContent } from "./tab.js"
import { berlinByFoodFile, contactsFile, helloFile, readmeFile } from "./editor/files.js"
import { getFileTextByMobile } from "./utils.js"

const DEFAULT_FILE_NAME = helloFile.name
let previousFileName = DEFAULT_FILE_NAME

export function initExplorer(explorer, relatedElements) {
    if (explorer) {
        const explorerElements = {
            title: explorer.querySelector('#explorer-title'),
            collapseButton: explorer.querySelector('button'),
            fileBlock: explorer.querySelector('#explorer-files')
        }

        // hide explorer and set full-size editor
        const showExplorer = () => {
            relatedElements
                .filesButton
                .classList
                .toggle(FILES_BUTTON__ACTIVE)
            relatedElements
                .pageContent
                .classList
                .add(PAGE_EDITOR__ACTIVE)
            relatedElements
                .pageContent
                .classList
                .remove(PAGE_EXPLORER__ACTIVE)
            relatedElements
                .editor
                .classList
                .toggle(EDITOR__DISABLED)
            explorer.classList.toggle(EXPLORER__DISABLED)
        }

        // handlers
        const titleClickHandler = () => {
            explorerElements.title.classList.toggle(EXPLORER_TITLE_ARROW__DISABLED)
            explorerElements.fileBlock.classList.toggle(EXPLORER_FILES__DISABLED)
        }

        const collapseClickHandler = (e) => {
            e.stopPropagation()
            const folders = explorerElements.fileBlock.querySelectorAll('.folder')
            folders.forEach(folder => folder.classList.add(FOLDER__DISABLED))
        }

        const fileClickHandler = (e) => {
            const titleBlock = e.target.closest('.folder__title-block')
            const file = e.target.closest('.file')

            if (titleBlock) {
                const folder = titleBlock.closest('.folder')
                folder.classList.toggle(FOLDER__DISABLED)
            }

            if (file) {
                document.querySelectorAll('.file').forEach(file => file.classList.remove(FILE__ACTIVE))
                file.classList.toggle(FILE__ACTIVE)

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
        explorer.addEventListener('click', fileClickHandler)
    }
}

function setEditorContent(fileName) {
    let adaptiveText = ''

    switch (fileName) {
        case helloFile.name: {
            adaptiveText = getFileTextByMobile(helloFile)
            clearEditor()
            writeEditorText(adaptiveText, 1)
            setTabContent(helloFile.name, "'🖐'")
            break
        }
        case contactsFile.name: {
            adaptiveText = getFileTextByMobile(contactsFile)
            setNewEditorText(adaptiveText)
            setTabContent(contactsFile.name, '"📞"')
            break
        }
        case readmeFile.name: {
            clearEditor()
            writeEditorText(readmeFile.text, 1)
            setTabContent(readmeFile.name, '"👀"')
            break
        }
        case berlinByFoodFile.name: {
            adaptiveText = getFileTextByMobile(berlinByFoodFile)
            clearEditor()
            writeEditorText(adaptiveText, 1)
            setTabContent(berlinByFoodFile.name, '"🍺"')
            break
        }
        default: {
            clearEditor()
            writeEditorText('file name not found', 1)
            setTabContent('undefined', '"🚫"')
        }
    }
}