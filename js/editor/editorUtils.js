export function writeText(text, dalay, editor) {
    if (editor) {
        const textArr = text.split('')
        // cut redundant space by default
        let tempText = editor.innerHTML.trimStart()

        let i = 0
        for (const letter of textArr) {
            i++
            setTimeout(() => {
                tempText += letter
                editor.innerHTML = tempText

                // simulate on change event
                const inputEvent = new Event('input')
                editor.dispatchEvent(inputEvent)
            }, i * dalay)
        }
    }
}