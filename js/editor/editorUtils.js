let queue = Promise.resolve()
const editor = document.getElementById('editor')
const lineCounter = document.getElementById('line')
const colCounter = document.getElementById('col')
let shouldStop = false
let timeouts = []

export function writeText(text, dalay) {
    stopTyping()
    shouldStop = false
    // add text writing to queue for sync typing
    queue = queue.then(() => new Promise((resolve) => {
        if (!editor) return resolve()

        const textArr = text.split('')
        // cut redundant space by default
        let tempText = editor.innerHTML.trimStart()

        textArr.forEach((letter, index) => {
            const timeout = setTimeout(() => {
                console.log(shouldStop) //

                if (shouldStop) return resolve()

                tempText += letter
                editor.innerHTML = tempText

                // simulate on change event
                const inputEvent = new Event('input')
                editor.dispatchEvent(inputEvent)

                if (index === textArr.length - 1) resolve()
            }, index * dalay)

            timeouts.push(timeout)
        })
    }))
}

export function stopTyping() {
    shouldStop = true
    //timeouts.forEach(timeout => clearTimeout(timeout))
    //timeouts = []
}

export function setCusorInfo(line, col) {
    if (lineCounter && colCounter) {
        lineCounter.textContent = line + ','
        colCounter.textContent = col
    }
}   