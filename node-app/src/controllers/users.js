const UserService = require('../services/userService');

const userService = new UserService();

exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};