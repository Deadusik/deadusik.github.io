import { setEditorText } from "./editor.js"

const editor = document.getElementById('text-area')
const lineCounter = document.getElementById('line')
const colCounter = document.getElementById('col')
let abortController = null

export async function writeEditorText(text, delay) {
    if (abortController) abortController.abort()

    abortController = new AbortController()
    await setAsyncText(text, delay, abortController.signal)
}

export function setNewEditorText(text) {
    abortWriting()
    setEditorText(text)
    const inputEvent = new Event('input')
    editor.dispatchEvent(inputEvent)
}

async function setAsyncText(text, delay, signal) {
    let tempText = editor.innerHTML.trimStart()
    const textArr = text.split('')

    for (let i = 0; i < textArr.length; i++) {
        if (signal.aborted) return
        tempText += await setAsyncSymbol(textArr[i], delay)
        editor.innerHTML = tempText

        await new Promise(requestAnimationFrame)
    }
}

export function abortWriting() {
    abortController.abort()
}

function setAsyncSymbol(letter, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            // simulate on change event
            const inputEvent = new Event('input')
            editor.dispatchEvent(inputEvent)
            resolve(letter)
        }, delay)
    })
}

export function setCusorInfo(line, col) {
    if (lineCounter && colCounter) {
        lineCounter.textContent = line + ','
        colCounter.textContent = col
    }
}   