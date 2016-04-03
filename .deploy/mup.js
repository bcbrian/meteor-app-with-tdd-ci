module.exports = {
    servers: {
      one: {
        host: process.env.DPIP,
        username: process.env.DPUN,
        password: process.env.DPPW
        // pem: './mykey',
      },
    },

    meteor: {
      name: 'bcbrian',
      path: '../',
      servers: {
        one: {},
      },
      env: {
        PORT: 3086,
        ROOT_URL: 'http://bcbrian.com',
        MONGO_URL: 'mongodb://localhost/meteor'
      },
      deployCheckWaitTime: 60
    },

    mongo: {
      oplog: false,
      port: 3087,
      servers: {
        one: {},
      },
    },
  };
