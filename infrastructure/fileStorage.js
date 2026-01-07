
import fs from "node:fs/promises";
import { firstLetterOf } from "../domain/word.js";

const DATA_PATH = "C:/Users/Vomper/Desktop/QazVocabProject/infrastructure/data";

function getFilePathForWord(word) {
    const letter = firstLetterOf(word);
    return `${DATA_PATH}/${letter}${letter.toUpperCase()}.json`;
}

export async function loadData(word) {
    const path = getFilePathForWord(word);

    try {
        const text = await fs.readFile(path, "utf8");
        return JSON.parse(text);
    } catch(err) {
        if (err.code === "ENOENT") {
            return {};
        }
        throw err;
    }
}

export async function saveData(word, data) {
    const path = getFilePathForWord(word);
    await fs.writeFile(path, JSON.stringify(data, null, 2))
}
