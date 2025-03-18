import { writeText } from "./editor/editorUtils.js";
import { initEditor } from "./editor/initEditor.js";
import { testText } from "./editor/textData.js";

main()

function main() {
    initEditor()
    writeText(testText, 2)
}