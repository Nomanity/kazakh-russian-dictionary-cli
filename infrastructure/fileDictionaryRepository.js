
import { loadDataByLetter, loadDataByWord, loadAllData, saveData } from "./fileStorage.js";

export function createRepository() {
    return {
        loadByLetter: loadDataByLetter,
        loadByWord: loadDataByWord,
        loadAll: loadAllData,
        save: saveData,
    }
};