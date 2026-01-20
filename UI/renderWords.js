
export function renderWordList(entries) {
  if (entries.length === 0) {
    console.log("❌ Ничего не найдено");
    return;
  }

  console.log();
  for (const [kz, ru] of entries) {
    console.log(`• ${kz} — ${ru}`);
  }
  console.log();
}