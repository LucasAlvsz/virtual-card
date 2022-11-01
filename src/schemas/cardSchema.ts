import joi from "joi"
import { CardData } from "@/types/cardTypes"

const createCardSchemaBody = joi.object<CardData>({
	name: joi.string().required(),
	linkedinUrl: joi.string().uri().required(),
	githubUrl: joi.string().uri().required(),
})

const createCardSchema = joi
	.object({
		body: createCardSchemaBody,
	})
	.options({ allowUnknown: true })

const getCardSchemaParams = joi.object({
	name: joi.string().required(),
})

const getCardSchema = joi
	.object({
		params: getCardSchemaParams,
	})
	.options({ allowUnknown: true })

export { createCardSchema, getCardSchema }
