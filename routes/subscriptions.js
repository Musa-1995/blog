var express = require('express');
var router = express.Router();
var subscriptions = [{id:1, content:""}]

/* GET subscriptions. */
router.get('/subscriptions', function(req, res, next) {
  res.json(subscriptions);
});
router.post('/:id', function(req, res, next) {
  userId = req.params.id;
  subscriptions = req.body;
  res.json(subscriptions);
});
router.put('/:id', function(req, res, next) {
  updatesubscriptions = req.body;
  userId = req.params.id;
  subscriptions.forEach(subscriptions => {
    if (subscriptions.id === parseInt(userId)){
      subscriptions.content = updatesubscriptions.content;
    }
  });
  res.json(subscriptions);
});
router.delete('/:id', function(req, res, next) {
  res.json({mssg:"Deleted", subscriptions:subscriptions.filter(subscriptions => subscriptions.id !== parseInt(req.params.id))});
});
module.exports = router;