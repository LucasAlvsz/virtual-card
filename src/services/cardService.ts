import { CardData } from "@/types/cardTypes"
import queryFactory from "@/factories/queryFactory"
import cardRepository from "@/repositories/cardRepository"
import { conflictError, notFoundError } from "@/errors"

const createCard = async (cardData: CardData) => {
	const card = await queryFactory.getByName(cardData.name, "Card")
	if (card) throw conflictError("Card already exists, please choose another name")
	await cardRepository.create(cardData)
}

const getCardByName = async (name: string) => {
	const card = await queryFactory.getByName(name, "Card")
	if (!card) throw notFoundError("Card does not exist")
	return {
		name: card.name,
		linkedinUrl: card.linkedinUrl,
		githubUrl: card.githubUrl,
	}
}

export default {
	createCard,
	getCardByName,
}
