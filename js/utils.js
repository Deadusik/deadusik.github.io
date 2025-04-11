import { LG, MD } from './constants.js'

export function checkIsMobile() {
    const width = window.innerWidth

    if (width <= LG) {
        return true
    }

    return false
}

export function getFileTextByMobile(file) {
    if (file) {
        const width = window.innerWidth

        if (width < MD && file.md_text) {
            return file.md_text
        }

        return file.text
    }
}