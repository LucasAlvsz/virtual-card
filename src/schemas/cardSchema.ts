import joi from "joi"
import { CardData } from "@/types/cardTypes"

const cardSchemaBody = joi.object<CardData>({
	name: joi.string().required(),
	linkedinUrl: joi.string().required(),
	githubUrl: joi.string().required(),
})

const cardSchema = joi
	.object({
		body: cardSchemaBody,
	})
	.options({ allowUnknown: true })

export default cardSchema
