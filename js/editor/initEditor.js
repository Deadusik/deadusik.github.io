const ITEM_CLASS = 'line-counter__number'
let count = 0

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
                }
            }
        })
    }
}


function getCounterItem(number) {
    const element = document.createElement('p')
    element.className = ITEM_CLASS
    element.textContent = number

    return element
}