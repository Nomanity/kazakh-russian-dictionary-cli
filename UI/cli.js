
import { select } from "@inquirer/prompts"

export async function startCli({ addWord, showWords }) {
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
      case "add": await addWord(); break;      
      case "show": await showWords(); break;
      case "exit": console.log("Пока-пока 👋"); return;
    }
  }
}
