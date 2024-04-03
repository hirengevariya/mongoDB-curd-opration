const UserModel = require('../model/userModel');

module.exports = {
  getAllUsers: function (req, res) {
    UserModel.getAll().then((userAllRes) => {
      res.json({status: true, data: userAllRes})
    })
  },

  newUserData: function (req, res) {
    const {firstName, lastName} = req.body;

    // Create user data
    const userData = {
      firstName,
      lastName
    };

    UserModel.insert(userData).then((userCreateRes) => {
      res.json({
        status: true,
        data: userCreateRes,
        message: 'User data successfully added!'
      });
    }).catch(() => {
      res.json({status: false, message: 'User data failed to insert!'})
    })
  },

  getUserById: function (req, res) {
    console.log('GetUser Id -->> ', req)
    const {id} = req.params;
    UserModel.findById(id).then((userIdRes) => {
      res.json({status: true, data: userIdRes})
    })
  },

  updateUserById: function (req, res) {
    const {id} = req.params;
    UserModel.update(id, req.body).then((userUpdateRes) => {
      res.json({
        status: true,
        data: userUpdateRes,
        message: 'Update successfully'
      });
    })
  },

  deleteUserById: function (req, res) {
    const {id} = req.params;
    UserModel.delete(id).then((deleteRes) => {
      (!deleteRes)
        ? res.json({
          status: false,
          message: 'Delete user details fail! Please try again.'
        })
        : res.json({
          status: true,
          message: 'User details successfully deleted'
        });
    })
  },
};