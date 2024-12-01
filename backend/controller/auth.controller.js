export const login = (req, res) => {
  const username = "admin";
  const password = "password";
  res.send(`login user, ${username}`);
};
