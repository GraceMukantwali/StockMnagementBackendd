const express = ('express');
const stockRouter = express.Router();
// const{ record,findByName,findById,findByDate,findByPrice,findByQuantity}

const {create,list, update,remove } = require("../controllers/controllers/stockNameControllers");



stockRouter.post('/add,record');
stockRouter.get('/list',list);
stockRouter.put('/update',update);
stockRouter.delete('/delete',remove);
stockRouter.get('/findBtId',findById);
stockRouter.get('/findByDate',findByDdate);
stockRouter.get('findByQuantnty',findByQuantity);



module.exports = stockRouter;


