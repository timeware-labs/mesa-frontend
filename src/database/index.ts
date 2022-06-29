import knex from 'knex'

import databaseConfig from './config'

export default function createConnection() {
	const connection = knex(databaseConfig.development)

	return connection
}
