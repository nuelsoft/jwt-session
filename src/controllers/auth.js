const {SessionRepository} = require("../models/session");
const {SessionFrame} = require("../models/session");
const {UserFrame} = require("../models/user");

class AuthController {
  static async login(request, response) {
    const {email, password} = request.body;

    /***
     * Login Logic
     */

    const user = new UserFrame({email});
    const session = new SessionFrame({
      device_id: "av9i45ox", user: user.id,
      /**
       ...any other data you want to store, like location, etc
       */
    })
    /**
     * Session Persisting Logic
     */

    const jwtToken = functionForGeneratingJWT({
      ...claims,
      session_id: session.id
    });

    response.status(201).send({
      user: user.json,
      access_token: jwtToken
    })

  }

  static async logout(request, response) {

    const token = request.get("Authorization"); //Get token from request header.

    const claims = functionToDecryptJWT(token);

    /*
     * Ensure session already exists and not deactivated already.
     */

    const session = await SessionRepository.getSession(claims.session_id)
    /**
     * Your validation Logic
     */

    await SessionRepository.deactivate(session.id)
  }

  static async anAuthenticatedRoute(request, response) {

    const token = request.get("Authorization"); //Get token from request header.

    const claims = functionToDecryptJWT(token);

    /**
     * Fetch Token
     */
    const session = await SessionRepository.getSession(claims.session_id)

    if (session == null){
      /**
       * UnAuthorizedException Handlee (Dishonor Request)
       */
    }else {
      /**
       * Rest of your Logic (Honor Request)
       */
    }

  }

}

module.exports = AuthController;