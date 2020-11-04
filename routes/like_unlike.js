var express = require('express');
var router = express.Router();
var like_unlike = [{id:1, content:""}]

/* GET like_unlike. */
router.get('/like_unlike', function(req, res, next) {
  res.json(like_unlike);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  like_unlike = req.body;
  res.json(like_unlike);
});
router.put('/:id', function(req, res, next) {
  updatelike_unlike = req.body;
  userId = req.params.id;
  like_unlike.forEach(categories => {
    if (like_unlike.id === parseInt(userId)){
      like_unlike.content = updatelike_unlike.content;
    }
  });
  res.json(like_unlike);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", like_unlike:categories.filter(like_unlike => like_unlike.id !== parseInt(req.params.id))});
});
module.exports = router;