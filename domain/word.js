
export function firstLetterOf(word) {
    if (!word || typeof(word) !== "string") {
        return new Error("Такое слово недопустимо");
    }
    return word[0].toLowerCase();
}
