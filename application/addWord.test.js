
import { describe, it, expect } from "vitest";
import { addWord } from "./addWord.js";

describe ("addWord", () => {
    it("Добавление слова в словарь", async () => {
        
        const fakeRepo = {
            loadByLetter: async () => ({}),
            save: async (word, data) => {
                fakeRepo.saved = { word, data };
            }
        };
        await addWord({kz: "тауык", ru: "курица"}, fakeRepo);
        expect(fakeRepo.saved.data["тауык"]).toBe("курица");
    });
});