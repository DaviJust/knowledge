module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './dev.sqlite3'
      }
    },
    staging: {
      client: 'postgresql',
      connection: {
        database: 'knowledge',
        user:     'postgres',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
}