export const authHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.access) {
    return { Authorization: `JWT ${user.access}` };
  } else {
    return {};
  }
};
