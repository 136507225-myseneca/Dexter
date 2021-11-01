var express = require('express')
var router = express.Router()
const {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} = require('../controllers/userController.js')

const { protect, admin } = require('../middleware/authMiddleware.js')

router.route('/').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource')
// })

module.exports = router
