
import { input } from "@inquirer/prompts";

function wordValidation(value, inputErr) {
    const regexNoDashNoSpace = /^[а-яёәіңғқөұүһ0-9 ]+$/i
    if (!value) return "Введите слово";
    if (!regexNoDashNoSpace.test(value)) {
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
    return word.toLowerCase().trim();
}

export async function askAddWord() {
    const kz = await wordInput({message: "Новое слово на казахском: "});
    const ru = await wordInput({message: "Перевод на русский: "});
    const data = { kz, ru };
    return data;
}

export async function askUpdateWord() {
    const kz = await wordInput({message: "Cлово на казахском: "});
    const ru = await wordInput({message: "Новое значение: "});
    const data = { kz, ru };
    return data;
}
