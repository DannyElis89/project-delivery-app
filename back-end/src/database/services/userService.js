const { User } = require("../models");
const { StatusCodes } = require("http-status-codes");
const { encryptPassword } = require("../middlewares/md5");
const sendError = require("../middlewares/sendError");
const { createToken } = require("../middlewares/jwt");
const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

const createUser = async (user) => {
  const { error } = userSchema.validate(user);
  if (error)
    sendError(StatusCodes.NOT_FOUND, "Some required fields are missing");

  const passHash = encryptPassword(user.password);

  const findName = await User.findOne({ where: { name: user.name } });
  const findEmail = await User.findOne({ where: { email: user.email } });

  if (findName || findEmail)
    sendError(StatusCodes.CONFLICT, "Customer alredy exists");

  const newUser = await User.create({
    ...user,
    password: passHash,
    role: "customer",
  });

  const token = createToken({ email: user.email, password: user.password });

  return {
    token,
    name: newUser.name,
    email: newUser.email,
    role: newUser.role,
  };
};

const findAll = async () => {
  const allUsers = await User.findAll({
    attributes: ["id", "name", "email", "role"],
  });
  console.log('allUsers', allUsers)

  return allUsers;
};

const findAdministrator = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'administrator' } })
  console.log('allUsersByRole', allUsersByRole)

  return allUsersByRole;
};

const findSeller = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'seller' } })
  console.log('allUsersByRole', allUsersByRole)

  return allUsersByRole;
};

const findCustomer = async () => {
  const allUsersByRole = await User.findAll({ where: { role: 'customer' } })
  console.log('allUsersByRole', allUsersByRole)

  return allUsersByRole;
};

module.exports = {
  findAll,
  createUser,
  findAdministrator,
  findSeller,
  findCustomer,
};
