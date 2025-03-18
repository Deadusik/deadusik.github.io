import { writeText } from "./editor/editorUtils.js";
import { initEditor } from "./editor/initEditor.js";
import { easterEggText, someText } from "./editor/textData.js";

main()

function main() {
    const icon = document.getElementById('icon')
    console.log(icon)

    initEditor()
    writeText(someText, 2)

    icon.addEventListener('click', () => {
        writeText(easterEggText, 2)
        console.log('click')
    })
}