const router = require('express').Router();
const thought = require('../../controllers/thought-controller.js');

router.route('/')
.get(thought.getAllThoughts);

router.route('/:id')
.post(thought.createThought)
.get(thought.getThoughtById)
.put(thought.updateThought);

router.route('/:userId/:thoughtId')
.delete(thought.deleteThought);

router.route('/:thoughtId/reaction')
.post(thought.addReaction);

router.route('/:thoughtId/reaction/:reactionId')
.delete(thought.removeReaction);

module.exports = router;