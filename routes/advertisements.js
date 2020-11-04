var express = require('express');
var router = express.Router();
var advertisements = [{id:1, content:""}]

/* GET advertisements. */
router.get('/advertisements', function(req, res, next) {
  res.json(advertisements);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  advertisements = req.body;
  res.json(advertisements);
});
router.put('/:id', function(req, res, next) {
  updateadvertisements = req.body;
  userId = req.params.id;
  advertisements.forEach(advertisements => {
    if (advertisements.id === parseInt(userId)){
      advertisements.content = updateadvertisements.content;
    }
  });
  res.json(advertisements);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", advertisements:advertisements.filter(advertisements => advertisements.id !== parseInt(req.params.id))});
});
module.exports = router;