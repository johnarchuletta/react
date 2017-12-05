module.exports = {
  server: {
    port: process.env.PORT || 8080
  },
  session: {
    options: {
      secret: process.env.SESSION_SECRET || 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000 * 60
      }
    }
  }
};