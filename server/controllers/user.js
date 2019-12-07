const User = require('../models/user');

exports.getUsers = (req, res) => {

  User.find({})
           //.sort({'startDate': 1})
           .sort({'name': 1})
           .exec((err, allUsers) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(allUsers);
  });
}

exports.getUserById = (req, res) => {
  const UserId = req.params.id;

  User.findById(UserId)
           .select('-__v')
           .exec((err, foundUser) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(foundUser);
  });
}

exports.saveUser = (req, res) => {
  const UserData = req.body;
  //const userId = req.user && req.user.sub;
  const User = new User(UserData);
  //User.userId = userId;

  User.save((err, createdUser) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdUser);
  });
}


exports.updateUser = (req, res) => {
  const UserId = req.params.id;
  const UserData = req.body;

  User.findById(UserId, (err, foundUser) => {
    if (err) {
      return res.status(422).send(err);
    }

    foundUser.set(UserData);
    foundUser.save((err, savedUser) => {
      if (err) {
        return res.status(422).send(err);
      }

      return res.json(savedUser);
    });
  })
}

exports.deleteUser = (req, res) => {
  const UserId = req.params.id;

  User.deleteOne({_id: UserId}, (err, deletedUser) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json({status: 'DELETED'});
  })
}
