import { BERLIN_BY_FOOD_NAME, CONTACTS_FILE_NAME, MAIN_FILE_NAME, README_NAME } from "../constants.js";
import { berlinByFoodText, contactsText, helloText, readmeText } from "./text-data.js";

// info
export const helloFile = {
    name: MAIN_FILE_NAME,
    text: helloText.lg,
    md_text: helloText.md
}

export const contactsFile = {
    name: CONTACTS_FILE_NAME,
    text: contactsText.lg
}

// projects
export const berlinByFoodFile = {
    name: BERLIN_BY_FOOD_NAME,
    text: berlinByFoodText.lg,
    md_text: berlinByFoodText.md
}

// other
export const readmeFile = {
    name: README_NAME,
    text: readmeText
}