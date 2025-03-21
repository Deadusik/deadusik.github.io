let queue = Promise.resolve()

export function writeText(text, dalay, editor) {
    // add text writing to queue for sync typing
    queue = queue.then(() => new Promise((resolve) => {
        if (!editor) return resolve()

        const textArr = text.split('')
        // cut redundant space by default
        let tempText = editor.innerHTML.trimStart()

        textArr.forEach((letter, index) => {
            setTimeout(() => {
                tempText += letter
                editor.innerHTML = tempText

                // simulate on change event
                const inputEvent = new Event('input')
                editor.dispatchEvent(inputEvent)

                if (index === textArr.length - 1) resolve()
            }, index * dalay)
        })
    }))
}

const lineCounter = document.getElementById('line')
const colCounter = document.getElementById('col')

export function setCusorInfo(line, col) {
    if (lineCounter && colCounter) {
        lineCounter.textContent = line
        colCounter.textContent = col
    }
}   