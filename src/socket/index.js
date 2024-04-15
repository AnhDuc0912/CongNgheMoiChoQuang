const { Manager } = require("socket.io-client");


export const socketManager = (namespace, options) => {
  return new Manager("http://localhost:4000", {})
    .socket('/' + namespace, {
      auth: {
        token: localStorage.getItem('accessToken')
      },
      transports: ["websocket","polling"],
      ...options
    })
}