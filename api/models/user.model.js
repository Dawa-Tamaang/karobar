import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: false,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
          validator: function (value) {
            // Simple email validation
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
          },
          message: 'Invalid email address',
        },
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
      type: String,
      required: false,
      unique: true,
      trim: true,
      validate: {
        validator: function (value) {
          // Simple phone number validation
          return /^\d{10}$/g.test(value);
        },
        message: 'Invalid phone number',
      },
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
}, { timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;