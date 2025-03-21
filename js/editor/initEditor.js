import { setCusorInfo, writeText } from "./editorUtils.js"

const ITEM_CLASS = 'line-counter__number'
let count = 0
let countClicks = 0

export const initEditor = (editor) => {
    const counter = document.getElementById('counter')

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

function getCounterItem(number) {
    const element = document.createElement('p')
    element.className = ITEM_CLASS
    element.textContent = number

    return element
}

function editorEasterEgg(clicks, editor) {
    //console.log(clicks)

    if (clicks === 7) {
        writeText(`\n\nYou know...`, 100, editor)
    }
    else if (clicks === 6) {
        writeText(`\n\nI think...`, 100, editor)
    }
    else if (clicks === 3) {
        writeText(`\n\n...`, 100, editor)
    }
}