const getEmployerRole = (employeeName, employees) => {
  const employee = employees.find(({ name }) => name === employeeName);
  return employee.role;
};

module.exports = getEmployerRole;
