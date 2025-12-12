
import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });



function expandRanges(pattern) {
    const result = [];

    const parts = pattern.trim().split(/\s+/);

    for (let part of parts) {
        if (part.includes('-') && part.length === 3) {
            // пример: "а-я" или "0-9"
            const [start, end] = part.split('-');
            const startCode = start.codePointAt(0);
            const endCode = end.codePointAt(0);

            for (let code = startCode; code <= endCode; code++) {
                result.push(String.fromCodePoint(code));
            }
        } else {
            // одиночные символы
            result.push(part);
        }
    }

    return result;
}

function makeValidationMap(chars) {
    const map = {};
    chars.forEach(ch => map[ch] = true);
    return map;
}

const qazaqLettersLower = makeValidationMap(expandRanges("а-я ә ғ қ ң ө ұ ү һ ё 0-9 i h"));


function collectValidateInput(prompt_str, validationObj, rusDeclension) {
    let inputString;
    while (true) {
        let validCheck = true;
        inputString = prompt(prompt_str).toLowerCase();

        if (inputString.trim() === "") {
            console.clear();
            console.log(">>> Пустой ввод недопустим. Попробуйте снова.");
            validCheck = false;
        }

        for (let char of inputString) {
            if(!(Object.hasOwn(validationObj, char))) {
                console.clear();
                console.log(`>>> "${char}" нет в ${rusDeclension}. Проверь раскладку: символы и английские буквы, кроме "i" и "h", выдают ошибку.`);
                validCheck = false;
                break;
            }
        }
        if (validCheck) {
            break;
        }
    }
    return inputString;
}

export { qazaqLettersLower, collectValidateInput }; 
