const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ];
  
  class UserService {
    getAllUsers() {
      return users;
    }
  }
  
  module.exports = UserService;
  