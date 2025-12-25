
import { loadData, saveData } from "../infrastructure/fileStorage.js";


export async function addWord({kz, ru}) {
    const words = await loadData(kz);
    words[kz] = ru;
    await saveData(kz, words);
}