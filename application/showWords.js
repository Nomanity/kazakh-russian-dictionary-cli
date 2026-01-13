

export async function showAllWords(repository) {
    const dictionaries = await repository.loadAll();
    const allWords = dictionaries.flatMap( dict => 
        Object.entries(dict));
    return allWords;
}