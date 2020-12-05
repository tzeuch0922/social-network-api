const { getAllUsers, createUser } = require('../../controllers/user-controller');

const router = require('express').Router();
const user = require('../../controllers/user-controller.js');

router.route('/')
.get(user.getAllUsers)
.post(user.createUser);

router.route('/:id')
.get(user.getUserById)
.put(user.updateUser)
.delete(user.deleteUser);

router.route('/:userId/friend/:friendId')
.post(user.addFriend)
.delete(user.removeFriend);

module.exports = router;