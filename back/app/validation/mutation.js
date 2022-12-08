const Joi = require('joi');

// Schema pour la validation du changement de mot de passe d'un employee
const schemaUpdateEmployeePassword = Joi.object({
  password: Joi.string().min(8).max(128).regex(/[A-Z]/).regex(/[a-z]/).regex(/\d/).regex(/\W/).required(),
});

module.exports = {
  schemaUpdateEmployeePassword,
};
