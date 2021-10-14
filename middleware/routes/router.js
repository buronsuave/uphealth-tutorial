const express = require('express');
const router = express.Router();

// Product Controller
const { getProducts } = require('../controllers/product_controller');
const { getProduct } = require('../controllers/product_controller');
const { addProduct } = require('../controllers/product_controller');
const { deleteProduct } = require('../controllers/product_controller');
const { updateProduct } = require('../controllers/product_controller');

router.get('/products', getProducts);
router.post('/products', addProduct);
router.put('/products', updateProduct);
router.get('/product/:id', getProduct);
router.delete('/product/:id', deleteProduct);

// User Controller
const { getUsers } = require('../controllers/user_controller');
const { getUser } = require('../controllers/user_controller');
const { addUser } = require('../controllers/user_controller');
const { deleteUser } = require('../controllers/user_controller');
const { updateUser } = require('../controllers/user_controller');

router.get('/users', getUsers);
router.post('/users', addUser);
router.put('/users', updateUser);
router.get('/user/:id', getUser);   
router.delete('/user/:id', deleteUser);

// Category Controller
const { getCategories } = require('../controllers/category_controller');
const { getCategory } = require('../controllers/category_controller');
const { addCategory } = require('../controllers/category_controller');
const { deleteCategory } = require('../controllers/category_controller');
const { updateCategory } = require('../controllers/category_controller');

router.get('/categories', getCategories);
router.post('/categories', addCategory);
router.put('/categories', updateCategory);
router.get('/category/:id', getCategory);
router.delete('/category/:id', deleteCategory);

// UserType Controller
const { getUserTypes } = require('../controllers/usertype_controller');
const { getUserType } = require('../controllers/usertype_controller');
const { addUserType } = require('../controllers/usertype_controller');
const { deleteUserType } = require('../controllers/usertype_controller');
const { updateUserType } = require('../controllers/usertype_controller');

router.get('/usertypes', getUserTypes);
router.post('/usertypes', addUserType);
router.put('/usertypes', updateUserType);
router.get('/usertype/:id', getUserType);
router.delete('/usertype/:id', deleteUserType);

// Record Controller
const { getRecords } = require('../controllers/record_controller');
const { getRecord } = require('../controllers/record_controller');
const { addRecord } = require('../controllers/record_controller');
const { deleteRecord } = require('../controllers/record_controller');
const { updateRecord } = require('../controllers/record_controller');

router.get('/records', getRecords);
router.post('/records', addRecord);
router.put('/records', updateRecord);
router.get('/record/:id', getRecord);   
router.delete('/record/:id', deleteRecord);



module.exports = router;