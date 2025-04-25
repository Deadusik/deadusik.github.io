import { BEFA_ART_NAME, BERLIN_BY_FOOD_NAME, CONTACTS_FILE_NAME, IRREGULAR_VERBS_NAME, LNG_CARDS_NAME, MAIN_FILE_NAME, PRETTY_DOCS_NAME, README_NAME, RESPONSIVE_RESUME_NAME, TIC_TAC_TOE_NAME } from "../constants.js";
import { befaArtText, berlinByFoodText, contactsText, helloText, irregularVerbsText, lngCardsText, prettyDocsText, readmeText, responsiveResumeText, ticTacToeText } from "./text-data.js";

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

export const responsiveResumeFile = {
    name: RESPONSIVE_RESUME_NAME,
    text: responsiveResumeText.lg,
}

export const prettyDocsFile = {
    name: PRETTY_DOCS_NAME,
    text: prettyDocsText.lg,
}

//react projects
export const befaArtFile = {
    name: BEFA_ART_NAME,
    text: befaArtText.lg,
}

export const irregularVerbsFile = {
    name: IRREGULAR_VERBS_NAME,
    text: irregularVerbsText.lg,
    md_text: irregularVerbsText.md
}

export const ticTacToeFile = {
    name: TIC_TAC_TOE_NAME,
    text: ticTacToeText.lg,
}

export const lngCardsFile = {
    name: LNG_CARDS_NAME,
    text: lngCardsText.lg,
}


// other
export const readmeFile = {
    name: README_NAME,
    text: readmeText
}