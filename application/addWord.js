

export async function addWord({kz, ru}, repository) {
    const words = await repository.load(kz);
    words[kz] = ru;
    await repository.save(kz, words);
}