import joi from "joi"
import { CardData } from "@/types/cardTypes"

const cardSchemaBody = joi.object<CardData>({
	name: joi.string().required(),
	linkedinUrl: joi.string().uri().required(),
	githubUrl: joi.string().uri().required(),
})

const cardSchema = joi
	.object({
		body: cardSchemaBody,
	})
	.options({ allowUnknown: true })

export default cardSchema
