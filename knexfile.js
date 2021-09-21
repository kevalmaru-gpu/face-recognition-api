// Update with your config settings.

module.exports = {

  development: {
  client: 'pg',
  connection: {
    host : process.env.DATABASE_URL,
    ssl:true
  },
  migrations: {
    directory: __dirname + '/knex/migrations',
  },
  seeds: {
      directory: __dirname + '/knex/seeds'
  }
},

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
