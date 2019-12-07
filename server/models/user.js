const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    minlength: 1,
    unique: true,
    index: true,
  },
  //emailVerified: {
  //  type: Boolean,
  //},
  password: {
    type: String,
    minlength: 6,
  },
  name: {
    type: String,
  },
 });

 //export default mongoose.models.User || mongoose.model('User', UserSchema);

 module.exports = mongoose.model('User', UserSchema);



