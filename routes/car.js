
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploader')
const carController = require('../controllers/car')
const checkAuth = require('../middleware/checkAuth')


router.get('/', carController.getCars);

router.get('/freecars', carController.getFreeCars);

router.get('/rentedcars', carController.getRentedCars);

router.get('/:mat', carController.getCar);

router.post('/', checkAuth, upload.single("carimage"), carController.addCar);

router.delete('/:mat', checkAuth, carController.deleteCar);

router.patch('/freecar/:rentid', checkAuth, carController.freeCar);

//historique d une voiture
router.get('/history/:mat', checkAuth, carController.getCarHistory);


module.exports = router;