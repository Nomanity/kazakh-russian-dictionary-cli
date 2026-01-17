
import { input } from "@inquirer/prompts";

function wordValidation(value, inputErr) {
    const regexNoDashNoSpace = /^[а-яёәіңғқөұүһ0-9 ]+$/i
    if (!value) return "Введите слово";
    if (!regexNoDashNoSpace.test(value)) {
        return inputErr;
    }
    return true;
}

function rangeValidation(arr, inputErr) {
    const regexRange = /^[а-яёәіңғқөұүһ ]+$/i
    if (!arr) return "Введите слово";
    if (!regexRange.test(arr)) {
        return inputErr;
    }
    return true;
}

async function wordInput({message, inputErr = "Некорректный ввод"}) { 
    let word = await input({
        message: message,
        validate(value) {
            return wordValidation(value, inputErr);
        },
        transform(value) {
            return value.toLowerCase();
        }
    });
    return word.toLowerCase();
}

export async function askAddWord() {
    const kz = await wordInput({message: "Новое слово на казахском:"});
    const ru = await wordInput({message: "Перевод на русский:"});
    const data = { kz, ru };
    return data;
}

export async function rangeInput(message, inputErr = "Только казахские буквы") {
    let userRangeInput = await input ({
        message: message,
        validate(value) {
            return rangeValidation(value, inputErr);
        },
        transform(value) {
            return value.toLowerCase();
        }
    });
    userRangeInput = userRangeInput
        .toLowerCase()
        .replace(/\s*/g, "")
        .trim();
    return userRangeInput;
}

