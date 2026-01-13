
import { select } from "@inquirer/prompts";
import { askAddWord } from "./prompts.js";

export async function startCli({ addWord, showAllWords }) {
  while (true) {
    const action = await select({
      message: "Что вы хотите сделать?",
      choices: [
        { name: "➕ Добавить слово", value: "add" },
        { name: "👀 Посмотреть список слов", value: "show"},
        { name: "❌ Выход", value: "exit" }
      ]
    });

    switch (action) {
      case "add": 
        const data = await askAddWord();
        await addWord(data); 
        break;      
      case "show":
        const allWords = await showAllWords();
        console.log("\n");
        for (const [kz, ru] of allWords) {
          console.log(`• ${kz} — ${ru}`);
        }
        console.log("\n");
        break;
      case "exit": console.log("Пока-пока 👋"); return;
    }
  }
}
