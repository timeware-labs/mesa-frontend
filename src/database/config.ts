import type { Knex } from 'knex'

const { DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME } = process.env

const databaseConfig: { [key: string]: Knex.Config } = {
	development: {
		client: 'mssql',
		debug: true,
		connection: {
			server: DB_SERVER,
			host: DB_SERVER,
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASSWORD,
			options: {
				encrypt: true,
			},
			ssl: {
				rejectUnauthorized: false,
			},
		},
		pool: {
			min: 2,
			max: 6,
			acquireTimeoutMillis: 30000,
			idleTimeoutMillis: 30000,
			reapIntervalMillis: 1000,
		},
		useNullAsDefault: true,
	},
	production: {
		client: 'mssql',
		connection: {
			server: DB_SERVER,
			database: DB_NAME,
			user: DB_USER,
			password: DB_PASSWORD,
			options: {
				encrypt: true,
			},
		},
	},

	// staging: {
	// 	client: 'postgresql',
	// 	connection: {
	// 		database: 'my_db',
	// 		user: 'username',
	// 		password: 'password',
	// 	},
	// 	pool: {
	// 		min: 2,
	// 		max: 10,
	// 	},
	// 	migrations: {
	// 		tableName: 'knex_migrations',
	// 	},
	// },

	// production: {
	// 	client: 'postgresql',
	// 	connection: {
	// 		database: 'my_db',
	// 		user: 'username',
	// 		password: 'password',
	// 	},
	// 	pool: {
	// 		min: 2,
	// 		max: 10,
	// 	},
	// 	migrations: {
	// 		tableName: 'knex_migrations',
	// 	},
	// },
}

export default databaseConfig
