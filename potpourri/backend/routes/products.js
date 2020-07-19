const router = require('express').Router();
let Company = require('../models/products.model');

router.route('/').get((req, res) => {
    Company.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const compname = req.body.compname;

    const newUser = new Company({ compname });

    newUser.save()
        .then(() => res.json('Company added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Company.findById(req.params.id)
        .then(product => {
            product.compname = req.body.username;

            product.save()
                .then(() => res.json('Company updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
