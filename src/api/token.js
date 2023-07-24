export const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

export const getToken = () => {
  // eslint-disable-next-line prefer-const
  let token = '';
  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
    token = localStorage.getItem('bearer');
  } else if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
    setToken(token);
  }
  return token;
};

