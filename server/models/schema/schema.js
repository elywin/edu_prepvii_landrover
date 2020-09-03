const bcrypt = require("bcrypt");

const User = new Schema({
    username: {
      type: String,
      required: true,
    },
    firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: false,
        set: (value) => {
          return bcrypt.hashSync(value, 10);
        },
    },
});

module.exports = User;