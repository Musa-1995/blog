var express = require('express');
var router = express.Router();
var users = [{id:1, content:""}]

/* GET users. */
router.get('/users', function(req, res, next) {
  res.json(users);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  users = req.body;
  res.json(users);
});
router.put('/:id', function(req, res, next) {
  updateusers = req.body;
  userId = req.params.id;
  users.forEach(users => {
    if (users.id === parseInt(userId)){
      users.content = updateusers.content;
    }
  });
  res.json(users);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", users:users.filter(users => users.id !== parseInt(req.params.id))});
});
module.exports = router;