const express = require('express');

const getMenuItems = require('../controllers/getMenuItems');
const addMenuItem = require('../controllers/addMenuItemController');
const getItem = require('../controllers/getItemSpecificoController');
const deleteMenuItem = require('../controllers/deleteMenuItemController');
const modificaElemento = require('../controllers/modificaElementoController');
const getOrdini = require('../controllers/getOrdiniController');
const getOrdineSpecifico = require('../controllers/getOrdineSpecificoController');
const submitOrdine = require('../controllers/submitOrdineController');

const router = express.Router();

router.get('/', getMenuItems);

router.get('/menu', getMenuItems);

router.get('/menu/api/items', getMenuItems);

router.get('/menu/api/items/:id', getItem);

router.post('/menu/api/admin/addMenuItem', addMenuItem);

router.delete('/menu/api/admin/deleteMenuItem/:id', deleteMenuItem);

router.put('/menu/api/admin/modificaMenuItem/:id', modificaElemento);

router.get('/menu/api/ordini', getOrdini);

router.post('/menu/api/ordini', submitOrdine);

router.get('/menu/api/ordini/:id', getOrdineSpecifico);

module.exports = router;