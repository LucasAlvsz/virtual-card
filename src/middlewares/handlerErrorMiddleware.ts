import { NextFunction, Request, Response } from "express"

const handleError = (err: AppError, req: Request, res: Response, next: NextFunction) =>
	res
		.status(err.status || 500)
		.send(err.type === "AppError" ? err.message : "Internal server error")

type AppError = {
	status: number
	message: string
	type: string
}

export default handleError
