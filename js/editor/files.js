import { CONTACTS_FILE_NAME, MAIN_FILE_NAME } from "../constants.js";
import { contactsText, helloText } from "./text-data.js";

export const helloFile = {
    name: MAIN_FILE_NAME,
    text: helloText.lg,
    md_text: helloText.md
}

export const contactsFile = {
    name: CONTACTS_FILE_NAME,
    text: contactsText.lg,
    md_text: contactsText.md
}