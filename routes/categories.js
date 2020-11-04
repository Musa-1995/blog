var express = require('express');
var router = express.Router();
var categories = [{id:1, content:""}]

/* GET categories. */
router.get('/categories', function(req, res, next) {
  res.json(categories);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  categories = req.body;
  res.json(categories);
});
router.put('/:id', function(req, res, next) {
  updateCategories = req.body;
  userId = req.params.id;
  categories.forEach(categories => {
    if (categories.id === parseInt(userId)){
      categories.content = updateCategories.content;
    }
  });
  res.json(categories);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", categories:categories.filter(categories => categories.id !== parseInt(req.params.id))});
});
module.exports = router;
