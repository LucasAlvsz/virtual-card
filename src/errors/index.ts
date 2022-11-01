const unauthorizedError = (message: string) => {
	return {
		status: 401,
		message,
		type: "AppError",
	}
}

const conflictError = (message: string) => {
	return {
		status: 409,
		message,
		type: "AppError",
	}
}

const notFoundError = (message: string) => {
	return {
		status: 404,
		message,
		type: "AppError",
	}
}

export { unauthorizedError, conflictError, notFoundError }
