class SessionFrame {
  constructor(data) {
    this.id = data._id;
    this.device_id = data.device_id;
    this.user = data.user;
  }

  get json() {
    return {
      id: this.id,
      device_id: this.device_id,
      user: this.user
    }
  }

  static get schema() {
    return new mongoose.Schema({
      device_id: String,
      user: String,
      deactivated: Boolean
    })
  }
}

class SessionRepository {
  static model = mongoose.model("session", SessionFrame.schema)

  static async create(user) {
    const instance = new SessionRepository.model(user);
    return await instance.save();
  }

  static async getSession(id) {
    /**
     * Logic for retrieving session where `deactivated` is false
     */
  }

  static async deactivate(id) {
    /**
     * Logic for deactivating sessions,
     * Simply update the `deactivated` property to true.
     */
  }
}

module.exports = {SessionFrame, SessionRepository}