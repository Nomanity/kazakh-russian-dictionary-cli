
// Импорт функции для добавления слов в словарь
import { addWord } from './addWord.js';
import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

const rl = readline.createInterface({ stdin, stdout });

async function start() {
    console.log("\nЭто мой казахско-русский словарь.");
    console.log("Я сделал эту программу, чтобы создавать удобные списки для заучивания\n");

    const startQuestion = await rl.question("Готов начать? (да/нет)  ").toLowerCase();

    if (startQuestion === "да") {
        console.log("Поехали...\n");

    } else {
        rl.close();
        console.log("Окей! Тогда завершаю программу.");
        return;
    }
}

// function howManyWords() {
//     const 


addWord();
