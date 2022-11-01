import { Router } from "express"

import validateSchema from "@/middlewares/validateSchemaMiddleware"
import cardSchema from "@/schemas/cardSchema"

import { createCard } from "@/controllers/cardController"

const cardRouter = Router()

cardRouter.post("/", validateSchema(cardSchema), createCard)

export default cardRouter
