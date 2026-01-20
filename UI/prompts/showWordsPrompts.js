
import { select, input } from "@inquirer/prompts";

export async function askShowWordsQuery() {
  const type = await select({
    message: "Что показать?",
    choices: [
      { name: "📖 Весь словарь", value: "all" },
      { name: "🔤 По букве", value: "letter" },
      { name: "🔍 Одно слово", value: "word" }
    ]
  });

  if (type === "letter") {
    const letter = await input({ message: "Введите букву:" });
    return { type, letter };
  }

  if (type === "word") {
    const word = await input({ message: "Введите слово:" });
    return { type, word };
  }

  return { type };
}