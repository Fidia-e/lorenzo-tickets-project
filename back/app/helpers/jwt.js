const jwt = require('jsonwebtoken');
const debug = require('debug')('jwt:data');
const { AuthenticationError } = require('apollo-server');

const secret = process.env.JWT_SECRET || 'passphrase';

module.exports = {
  create(employeeData) {
    const options = {};
    options.expiresIn = process.env.JWT_EXPIRES;

    const employee = {
      id: employeeData.id,
      email: employeeData.email,
      ip: employeeData.ip,
    };

    return {
      token: jwt.sign(employee, secret, options),
      expiresIn: options.expiresIn,
    };
  },
  get(request) {
    if (request.header('Authorization')) {
      const bearerHeader = request.header('Authorization');
      const [, token] = bearerHeader.split(' ');

      try {
        const employee = jwt.verify(token, secret);

        if (!employee.ip || employee.ip !== request.ip) {
          throw new AuthenticationError("This IP can't access to this service, please renew your token /signin");
        }
        debug(employee);

        return employee;
      } catch (error) {
        throw new AuthenticationError('Token expired');
      }
    } else if (typeof request.header('Authorization') !== 'undefined') {
      throw new AuthenticationError('Missing token');
    }
    return null;
  },
};
