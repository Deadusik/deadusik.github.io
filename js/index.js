import { writeText } from "./editor/editorUtils.js";
import { initEditor } from "./editor/initEditor.js";
import { easterEggText, someText } from "./editor/textData.js";

main()

function main() {
    const editor = document.getElementById('editor')

    init(editor)

    writeText(someText, 2, editor)
}

function init(editor) {
    initEditor(editor)

    const icon = document.getElementById('icon')
    icon.addEventListener('click', () => {
        writeText(easterEggText, 2)
    })
}