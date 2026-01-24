
import { select } from "@inquirer/prompts";
import { askAddWord, askUpdateWord } from "./prompts/prompts.js";
import { askShowWordsQuery } from "./prompts/showWordsPrompts.js";
import { renderWordList } from "./renderWords.js";



export async function startCli({ addWord, showWords, updateWord }) {
  while (true) {
    const action = await select({
      message: "Что вы хотите сделать?",
      choices: [
        { name: "➕ Добавить слово", value: "add" },
        { name: "👀 Посмотреть список слов", value: "show"},
        { name: "♻️ Изменить перевод", value: "update"},
        { name: "❌ Выход", value: "exit" }
      ]
    });

    switch (action) {
      case "add": {
        const data = await askAddWord();
        await addWord(data); 
        break;     
      } 
      case "show": {
        const query = await askShowWordsQuery();
        const results = await showWords(query);
        renderWordList(results);
        break;
      }
      case "update": {
      const data = await askUpdateWord();
      await updateWord(data);
      console.log("Изменил перевод ✅");
      break;
      }

      case "exit": console.log("Пока-пока 👋"); return;
    }
  }
}
