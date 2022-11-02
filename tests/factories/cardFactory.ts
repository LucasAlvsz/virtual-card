import { faker } from "@faker-js/faker"

const createCardData = (overrides = {}) => {
	return {
		name: faker.name.firstName(),
		linkedinUrl: faker.internet.url(),
		githubUrl: faker.internet.url(),
		...overrides,
	}
}

export { createCardData }
