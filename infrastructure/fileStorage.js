
import fs from "node:fs/promises";
import { firstLetterOf } from "../domain/word.js";

const DATA_PATH = "C:/Users/Vomper/Desktop/QazVocabProject/infrastructure/data";

function getFilePathForWord(word) {
    const letter = firstLetterOf(word);
    return `${DATA_PATH}/${letter}${letter.toUpperCase()}.json`;
}

export async function loadDataByLetter(word) {
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

export async function loadDataByWord(word) {
    const wordDictionary = await loadDataByLetter(word);

    if (Object.hasOwn(wordDictionary, word)) {
        return { [word]: wordDictionary[word] };
    } else {
        return {};
    }
}

export async function loadAllData() {
    const files = await fs.readdir(DATA_PATH);
    const allWords = await Promise.all(files.map(async file => {
        const text = await fs.readFile(`${DATA_PATH}/${file}`, "utf8");
        return JSON.parse(text);
        })
    );
    return allWords;
}

export async function saveData(word, data) {
    const path = getFilePathForWord(word);
    await fs.writeFile(path, JSON.stringify(data, null, 2))
}
