import { clearEditor } from "./editor/editor.js"
import { setEditorText } from "./editor/editor-utils.js"
import { someText, someText2 } from "./editor/text-data.js"

export function initExplorer(explorer, editor) {
    if (explorer && editor) {
        explorer.addEventListener('click', (e) => {
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

                setEditorContent(fileName)
            }
        })
    }
}

function setEditorContent(fileName) {
    switch (fileName) {
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
        }
    }
}