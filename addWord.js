const prompt = require('prompt-sync')({sigint : true});
const fs = require('fs');

function getNewWordPair() {
    const newQazaqWord = prompt('Новое слово на казахском: ');
    const translateWord = prompt('Его перевод на русский: ');
    const wordsPair = { [newQazaqWord] : translateWord };
    return wordsPair;
}

function generateFileName(obj) {
    const extractFirstLetter = Object.keys(obj)[0][0];
    const jsonFileName = extractFirstLetter + extractFirstLetter.toUpperCase() + '.json';
    return jsonFileName;
}

function addWord() {
    const wordsPair = getNewWordPair();
    const jsonString = JSON.stringify(wordsPair); 
    const fileName = generateFileName(wordsPair);

    fs.writeFile(`./wordArrays/${fileName}`, jsonString, (err) => {
        if (err) {
            console.log(`Не удалось добавить слово. Ошибка: ${err}`);
        } else {
            console.log(`Успешно добавил слово. В файле "${fileName}" оно будет в самом низу.`);
        }
    });
}

module.exports = {
    getNewWordPair,
    generateFileName,
    addWord
};