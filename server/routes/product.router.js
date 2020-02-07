const express = require('express');
const router = express.Router();

const {saveData, updateData, deleteData, oneData, all} = require('../controllers/product.controller');

router.route('/saveData')
      .post(saveData);

router.route('/updateData/:id')
      .put(updateData);

router.route('/deleData/:id')
      .delete(deleteData);

router.route('/getOne/:id')
      .get(oneData);

router.route('/getAll')
      .get(all);

module.exports = router;


