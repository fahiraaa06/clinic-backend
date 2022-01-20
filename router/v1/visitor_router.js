const router = require('express').Router();
const visitor = require('../../controllers/visitor_controller');

router.post('/visitor', visitor.createVisitor);
router.get('/visitors', visitor.findVisitors);
router.delete('/visitor', visitor.deleteVisitor);

module.exports = router;
