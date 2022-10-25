const jwt = require('jsonwebtoken');
const debug = require('debug')('jwt:data');
const { AuthenticationError } = require('apollo-server');

const secret = process.env.JWT_SECRET || 'passphrase';

module.exports = {
  create(userData) {
    const expiresIn = process.env.JWT_EXPIRES;

    const user = {
      id: userData.id,
      email: userData.email,
      ip: userData.ip,
    };

    return {
      token: jwt.sign(user, secret, { expiresIn }),
      expiresIn,
    };
  },
  get(request) {
    if (request.header('Authorization')) {
      const bearerHeader = request.header('Authorization');
      const [, token] = bearerHeader.split(' ');

      try {
        const user = jwt.verify(token, secret);

        if (!user.ip || user.ip !== request.ip) {
          throw new AuthenticationError("This IP can't access to this service, please renew your token /signin");
        }
        debug(user);

        return user;
      } catch (error) {
        throw new AuthenticationError('Token expired');
      }
    } else if (typeof request.header('Authorization') !== 'undefined') {
      throw new AuthenticationError('Missing token');
    }
    return null;
  },
};
