import { setCusorInfo, writeEditorText } from "./editor-utils.js"

const ITEM_CLASS = 'line-counter__number'
let count = 0
let countClicks = 0
let editor = null

export const initEditor = (editorElement) => {
    const counter = document.getElementById('counter')
    editor = editorElement

    if (editor && counter) {
        editor.addEventListener('input', (e) => {
            if (editor) {
                const text = e.target.textContent
                const lines = text.split('\n')

                count = 0
                counter.textContent = ''

                for (const line of lines) {
                    count++
                    counter.append(getCounterItem(count))
                    setCusorInfo(count, line.length)
                }
            }
        })

        editor.addEventListener('click', (e) => {
            countClicks++
            editorEasterEgg(countClicks, editor)
        })
    }
}

export function clearEditor() {
    if (editor) {
        editor.textContent = ''
    }
}

export function setEditorText(text) {
    if (editor && text) {
        editor.innerHTML = text
    }
}

function getCounterItem(number) {
    const element = document.createElement('p')
    element.className = ITEM_CLASS
    element.textContent = number

    return element
}

function editorEasterEgg(clicks) {
    if (clicks === 7) {
        writeEditorText(`\n\nYou know...`, 100)
    }
}