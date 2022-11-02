const notFoundError = (message: string) => {
	return {
		status: 404,
		message,
		type: "AppError",
	}
}

export { notFoundError }
