var express = require('express');
var router = express.Router();
var comments = [{id:1, content:"hi"}]

/* GET comments. */
router.get('/', function(req, res, next) {
  res.json(comments);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  comments = req.body;
  res.json(comments);
});
router.put('/:id', function(req, res, next) {
  updatecomments = req.body;
  userId = req.params.id;
  comments.forEach(comments => {
    if (comments.id === parseInt(userId)){
      comments.content = updatecomments.content;
    }
  });
  res.json(categories);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", comments:categories.filter(comments => comments.id !== parseInt(req.params.id))});
});
module.exports = router;;
