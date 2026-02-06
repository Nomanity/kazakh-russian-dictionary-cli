

export async function addWord({kz, ru}, repository) {
    const words = await repository.loadByLetter(kz);

    if (Object.hasOwn(words, kz)) {
        throw new Error("Слово уже существует");
    }
    
    words[kz] = ru;
    await repository.save(kz, words);
}