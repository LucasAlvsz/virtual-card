import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import { createCardSchema, getCardSchema } from "@/schemas/cardSchema"

import { createCard, getCardById } from "@/controllers/cardController"

const cardRouter = Router()

cardRouter
	.post("/", validateSchema(createCardSchema), createCard)
	.get("/:id", validateSchema(getCardSchema), getCardById)

export default cardRouter
