import { clearEditor } from "./editor/editor.js"
import { stopTyping, writeText } from "./editor/editorUtils.js"
import { someText } from "./editor/textData.js"

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
            stopTyping()
            clearEditor()
            writeText(someText, 10)
            break
        }
    }
}