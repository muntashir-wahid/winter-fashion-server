const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "An User must have a name"],
  },
  phoneNum: {
    type: String,
    required: [true, "An user must have a phone number"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
    min: [6, "Password must be more then or equal 6 charecters"],
  },
  picture: {
    type: String,
    required: [true, "A user must have a name"],
    validate: {
      validator: function (url) {
        return /(http(s?):)([\/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/g.test(url);
      },
      message: (props) => `${props.value} is not a valid picture!`,
    },
  },
  role: {
    type: String,
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
