export default {
  login: params => {
    console.log("login", { params });
    const { username } = params;
    localStorage.setItem('username', username);
    return Promise.resolve();
  },

  logout: params => {
    console.log("logout", { params });
    localStorage.removeItem('username');
    return Promise.resolve();
  },

  checkError: params => {
    console.log("checkError", { params });
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: params => {
    console.log("checkAuth", { params });
    return localStorage.getItem('username') ? Promise.resolve(): Promise.reject();
  },

  getPermissions: params => {
    console.log("getPermissions", { params });
    return Promise.resolve();
  }
}