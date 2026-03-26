
import { describe, it, expect } from "vitest";
import { updateWord } from "./updateWord.js";

describe("updateWord", () => {

  it("Обновляет перевод существующего слова", async () => {

    const fakeRepo = {
      loadByLetter: async () => ({
        алма: "яблоко",
        арман: "мечта"
      }),

      save: async (word, data) => {
        fakeRepo.saved = data;
      }
    };

    await updateWord( { kz: "алма", ru: "яблочко" }, fakeRepo);

    expect(fakeRepo.saved["алма"]).toBe("яблочко");
    expect(fakeRepo.saved["арман"]).toBe("мечта");
  });

});