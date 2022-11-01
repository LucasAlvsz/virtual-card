import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import { createCardSchema, getCardSchema } from "@/schemas/cardSchema"

import { createCard, getCardByName } from "@/controllers/cardController"

const cardRouter = Router()

cardRouter
	.post("/", validateSchema(createCardSchema), createCard)
	.get("/:name", validateSchema(getCardSchema), getCardByName)

export default cardRouter
