const { Router } = require('express');


const diaryRouter = Router();
const diaryController = require('../controllers/diaryController.js');


diaryRouter.get('/', diaryController.index);
diaryRouter.get('/:id', diaryController.show);
diaryRouter.post('/', diaryController.create);
diaryRouter.patch('/:id', diaryController.update)
diaryRouter.delete('/:id', diaryController.destroy);

module.exports = diaryRouter;
