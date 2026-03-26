
import { describe, it, expect } from "vitest";
import { deleteWord } from "./deleteWord.js";

describe("deleteWord", () => {
    it("Удаление слова", async () => {

        const fakeRepo = {
            loadByLetter: async () => 
            ({
                "алма": "яблоко",
                "арман": "мечта"
            }),
            save: async (word, data) => {
                fakeRepo.saved = data;
            }
        };

        await deleteWord("алма", fakeRepo);
        expect(fakeRepo.saved["алма"]).toBeUndefined();
        expect(fakeRepo.saved["арман"]).toBe("мечта");

    });
});