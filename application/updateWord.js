
export async function updateWord({kz, ru}, repository) {
    const words = await repository.loadByLetter(kz);
    words[kz] = ru;
    await repository.save(kz, words);
}