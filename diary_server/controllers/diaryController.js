const Diary = require("../models/Diary.js");

async function index (req, res) {
    try {
        const diaries = await Diary.getAll()
        res.status(200).json(diaries)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}

async function show (req, res) {
    try {
        const id = parseInt(req.params.id);
        const diary = await Diary.getOneById(id);
        res.status(200).json(diary);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
}

async function create (req, res) {
    try {
        const data = req.body
        const newDiary = await Diary.create(data)
        res.status(201).json(newDiary)
    } catch (err) {
        res.status(400).json({ error: err.message} )
    }
}

async function update (req, res) {
    try {
        const id = parseInt(req.params.id)
        const diaryToUpdate = await Diary.getOneById(id)

        // const object = req.body.object;
        
        if (!diaryToUpdate) {
            return res.status(404).send({ message: 'Diary not found' });
        }

        const result = await diaryToUpdate.update(votes);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}

async function destroy (req, res) {
    try {
        const id = parseInt(req.params.id);
        await Diary.deleteById(id)
        res.status(204).send({ message: 'entry deleted!' })
    } catch (error) {
      res.status(404).send({ error: error.message });
  }
}

module.exports = {
    index, show, create, update, destroy
}
