const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    minlength: 1,
    unique: true,
    index: true,
  },
  emailVerified: {
    type: Boolean,
    default:false
  },
  password: {
    type: String,
    minlength: 6,
  },
  name: {
    type: String,
  },
  role: {
    type: Number,
    default: 2 // 1- admin | 2- user
  }
 });

 //export default mongoose.models.User || mongoose.model('User', UserSchema);

 module.exports = mongoose.model('User', UserSchema);



