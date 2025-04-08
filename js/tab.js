const tab = document.getElementById('tab')
const tabTitle = tab.querySelector('h3')

export function setTabContent(text, symbol) {
    tabTitle.textContent = text
    tabTitle.style.setProperty('--icon', `${symbol}`)
}