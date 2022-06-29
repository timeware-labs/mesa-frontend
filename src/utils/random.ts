import faker from '@faker-js/faker'

export const generateRandomNumbers = (
	length: number,
	min = 1000,
	max = 5000
) => {
	return Array.from({ length })?.map(() => {
		const value = faker.datatype.number({ min, max })

		return value
	})
}

export const generateRandomDates = (length: number) => {
	return Array.from({ length })
		?.map(() => faker.date.recent(30).toISOString())
		.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
}
