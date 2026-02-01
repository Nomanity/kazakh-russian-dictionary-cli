

export async function deleteWord(kz, repository) {
    const words = await repository.loadByLetter(kz);
    
    if (!(Object.hasOwn(words, kz))) {
        throw new Error(`Слово "${kz}" не найдено`);
    }

    const ru = words[kz];
    delete words[kz];
    await repository.save(kz, words);

    return { kz, ru };
}
