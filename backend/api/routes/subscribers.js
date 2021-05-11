const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res) => {
    res.send('hello from api..');
});
// get one
router.get('/:id', (req, res) => {
    res.send(`${ req.params.id } ly`);
});
// post one
router.post('/', (req, res) => {

});
// update one
router.patch('/', (req, res) => {

});
// delete one
router.delete('/:id', (req, res) => {

});

module.exports = router;