const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let reqObj = {
        "status": "OK",
        "data": [1, 2, 3, 4, 5]
    }
    res.json(reqObj);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let reqObj = {
        "status": "OK",
        "data": {"masv": id}
    }
    res.json(reqObj);
});

router.put('/:id', (req, res) => {
    let reqObj = {
        "status": "OK",
        "data": req.body,
    }
    res.json(reqObj);
});

module.exports = router;