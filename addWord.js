
import fs from 'fs/promises';
import { qazaqLettersLower, collectValidateInput } from './collectInput.js';


function getNewWordPair() {
    try {
        const newQazaqWord = collectValidateInput('Новое слово на казахском: ', qazaqLettersLower, 'казахском алфавите');
        const translateWord = collectValidateInput('Его перевод на русский: ', qazaqLettersLower, 'русском алфавите');
        const wordsPair = { [newQazaqWord] : translateWord };
        return [newQazaqWord, translateWord, wordsPair];
    } catch(err) {
        console.log(err.message);
    }   
}

function generateFileName(obj) {
    const extractFirstLetter = Object.keys(obj)[0][0];
    const jsonFileName = extractFirstLetter + extractFirstLetter.toUpperCase() + '.json';
    return jsonFileName;
}

async function openJsonFile(fileName) {
    try {
        const existingFile = await fs.readFile(`./wordArrays/${fileName}`, "utf8");
        const jsonFileObj = JSON.parse(existingFile);
        return jsonFileObj;
    } catch(err) {
        if (err.code === "ENOENT") {
            console.log(`Файл ${fileName} еще не был создан. Сейчас создам...`);
            await fs.writeFile(`./wordArrays/${fileName}`, "{}", { flag: "wx" });
            setTimeout(() => console.log(`Создал новый файл с названием ${fileName}, папка "wordArrays"`), 1500);
            return {};
        } else {
            console.log("\n",err.message,"\n")
        }
    }
}

async function addWord() {
    const newWords = getNewWordPair();
    const wordsPair = newWords[2];
    const fileName = generateFileName(wordsPair);

    try {
        const workingFile = await openJsonFile(fileName);
        const appendWords = Object.assign(workingFile, wordsPair);
        const jsonString = JSON.stringify(appendWords, null, 4);
        fs.writeFile(`./wordArrays/${fileName}`, jsonString);
        console.log(`Успешно добавил пару "${newWords[0]} — ${newWords[1]}". В папке 'wordArrays' в файле "${fileName}" оно будет в самом низу.`);
    } catch(err) {
        console.log(`Не удалось добавить слово. Ошибка: ${err}`);
    }
}


export { addWord };