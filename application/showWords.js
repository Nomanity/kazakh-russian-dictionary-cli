

export async function showWords(query, repository) {
  switch (query.type) {
    case "all":
      return showAll(repository);

    case "letter":
      return showByLetter(query.letter, repository);

    case "word":
      return showSingle(query.word, repository);

    default:
      throw new Error("Unknown showWords query type");
  }
}

async function showAll(repository) {
  const dictionaries = await repository.loadAll();
  return dictionaries.flatMap(dict => Object.entries(dict));
}

async function showByLetter(letter, repository) {
  const dict = await repository.loadByLetter(letter);
  return Object.entries(dict);
}

async function showSingle(word, repository) {
  const dict = await repository.loadByWord(word);
  const translation = dict[word];
  return translation ? [[word, translation]] : [];
}