
import { loadData, saveData } from "./fileStorage.js";

export function createRepository() {
    return {
        load: loadData,
        save: saveData
    }
};