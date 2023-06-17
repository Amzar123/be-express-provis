const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
  investor: [],
  business: [],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
