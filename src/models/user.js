const mongoose = require("mongoose");

class UserFrame {
  constructor(data) {
    this.id = data._id;
    this.email = data.email;
  }

  get json() {
    return {
      id: this.id,
      email: this.email
    }
  }

  static get schema() {
    return new mongoose.Schema({
      email: String,
    })
  }
}

class UserRepository {

  static model = mongoose.model("user", UserFrame.schema)

  static async create(user) {
    const instance = new UserRepository.model(user);
    return await instance.save();
  }
}

module.exports = {UserRepository, UserFrame}