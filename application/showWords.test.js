
import { describe, it, expect } from "vitest";
import { showWords } from "./showWords.js";

describe ("showWords", () => {
  it("Показать все слова", async () => {
    const fakeRepo = {
      loadAll: async () => [
        {"алма": "яблоко"},
        {"жабайы": "дикий"}
      ]}

    const result = await showWords({type: "all"}, fakeRepo);
    expect(result).toEqual([
      ["алма", "яблоко"],
      ["жабайы", "дикий"]
    ]);
  });

  it("Показать слова на букву", async () => {
    const fakeRepo = {
      loadByLetter: async () => ({
        "алма": "яблоко",
        "арман": "мечта"
      })
    };

    const result = await showWords({type: "letter", letter: "а"}, fakeRepo);
    expect(result).toEqual([
      ["алма", "яблоко"],
      ["арман", "мечта"]
    ]);
  });

  it("Показать одно слово", async () => {
    const fakeRepo = {
      loadByWord: async (word) => ({
        "алма": "яблоко"
      })
    };

    const result = await showWords({type: "word", word: "алма"}, fakeRepo);
    expect(result).toEqual([["алма", "яблоко"]]);
  });
});