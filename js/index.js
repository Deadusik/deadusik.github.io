import { writeText } from "./editor/editorUtils.js";
import { initEditor } from "./editor/initEditor.js";
import { easterEggText, someText } from "./editor/textData.js";

main()

function main() {
    const editor = document.getElementById('editor')

    init(editor)

    writeText(someText, 10, editor)
}

function init(editor) {
    initEditor(editor)

    const iconClickHandler = () => {
        writeText(easterEggText, 2, editor)
        icon.removeEventListener('click', iconClickHandler)
    }

    const icon = document.getElementById('icon')
    icon.addEventListener('click', iconClickHandler)

}