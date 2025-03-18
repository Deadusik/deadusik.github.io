import { writeText } from "./editorUtils.js"

const ITEM_CLASS = 'line-counter__number'
let editor = null
let count = 0

export const initEditor = () => {
    editor = document.getElementById('editor')
    // remove redundant line by default
    editor.value = editor.value.trimStart()

    const counter = document.getElementById('counter')

    editor.addEventListener('input', (e) => {
        if (editor) {
            const text = e.target.value
            const lines = text.split('\n')

            console.log(lines)

            count = 0
            counter.innerHTML = ''
            editor.value = editor.value.trimStart()

            for (const line of lines) {
                count++
                counter.append(getCounterItem(count))
            }
        }
    })
}

export function updateEditor() {
    if (editor) {
        const text = e.target.value
        const lines = text.split('\n')

        console.log(lines)

        count = 0
        counter.innerHTML = ''
        editor.value = editor.value.trimStart()

        for (const line of lines) {
            count++
            counter.append(getCounterItem(count))
        }
    }
}

function getCounterItem(number) {
    const element = document.createElement('p')
    element.className = ITEM_CLASS
    element.textContent = number

    return element
}