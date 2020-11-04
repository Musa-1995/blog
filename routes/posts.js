var express = require('express');
var router = express.Router();
var posts = [{id:1, content:""}]

/* GET posts. */
router.get('/posts', function(req, res, next) {
  res.json(posts);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  posts = req.body;
  res.json(posts);
});
router.put('/:id', function(req, res, next) {
  updateposts = req.body;
  userId = req.params.id;
  posts.forEach(posts => {
    if (posts.id === parseInt(userId)){
      posts.content = updateposts.content;
    }
  });
  res.json(posts);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", posts:categories.filter(posts => posts.id !== parseInt(req.params.id))});
});
module.exports = router