
import { startCli } from "./UI/cli.js";
import { addWord } from "./application/addWord.js";
import { showWords } from "./application/showWords.js";
import { createRepository } from "./infrastructure/fileDictionaryRepository.js";

const fileRepository = createRepository();


startCli({
    addWord: data => addWord(data, fileRepository),
    showWords: query => showWords(query, fileRepository)
});