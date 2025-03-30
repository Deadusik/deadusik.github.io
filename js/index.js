import { setEditorText } from "./editor/editor-utils.js";
import { initEditor } from "./editor/editor.js";
import { easterEggText, someText } from "./editor/text-data.js";
import { initExplorer } from "./explorer.js";

main()

function main() {
    const editor = document.getElementById('editor')
    const explorer = document.getElementById('explorer')

    initApp(editor, explorer)

    setEditorText(someText, 10)
}

function initApp(editor, explorer) {
    initEditor(editor)
    initExplorer(explorer, editor)

    const page = document.getElementById('page')
    const icon = document.getElementById('icon')
    const pageContent = page.firstElementChild
    const filesButton = document.getElementById('files')

    const iconClickHandler = () => {
        setEditorText(easterEggText, 2)
        icon.removeEventListener('click', iconClickHandler)
    }
    icon.addEventListener('click', iconClickHandler)

    // hide/show explorer
    filesButton.addEventListener('click', () => {
        filesButton.classList.toggle('sidebar-button--active')
        pageContent.classList.toggle('page__content--editor-full')
        explorer.classList.toggle('explorer--hidden')
    })
}