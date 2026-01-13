
import { loadDataByLetter, loadAllData, saveData } from "./fileStorage.js";

export function createRepository() {
    return {
        loadByLetter: loadDataByLetter,
        loadAll: loadAllData,
        save: saveData
    }
};