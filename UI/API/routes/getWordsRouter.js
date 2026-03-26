
import express from "express";


export function createGetWordsRouter(repo) {
  
  const router = express.Router();

  router.get("/", async (req, res) => {
    try {
      const { letter } = req.query;

      if (letter) {
        const dict = await repo.loadByLetter(letter);
        return res.json(dict);
      }

      const all = await repo.loadAll();
      res.json(all);

    } catch (err) {
      res.status(500).json({ error: err.message }); 
    }
  });

  router.get("/:kz", async (req, res) => {
    try {
      const kz = req.params.kz;
      const dict = await repo.loadByWord(kz);
      if (!dict[kz]) {
        return res.status(404).json({ error: `Слово "${kz}" не найдено` });
      }

      res.json({ [kz]: dict[kz] });

    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
}