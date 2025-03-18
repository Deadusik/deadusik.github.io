export function writeText(text, dalay) {
    const textArr = text.split('')

    if (editor) {
        let i = 0
        for (const letter of textArr) {
            i++
            setTimeout(() => {
                editor.value += letter

                // simulate on change event
                const inputEvent = new Event('input')
                editor.dispatchEvent(inputEvent)
            }, i * dalay)
        }
    }
}