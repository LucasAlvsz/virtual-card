import { CardData } from "@/types/cardTypes"
import queryFactory from "@/factories/queryFactory"
import cardRepository from "@/repositories/cardRepository"
import { notFoundError } from "@/errors"

const createCard = async (cardData: CardData) => {
	const { id: cardId } = await cardRepository.create(cardData)
	return { cardId }
}

const getCardById = async (id: string) => {
	const card = await queryFactory.getById(id, "Card")
	if (!card) throw notFoundError("Card does not exist")
	return {
		name: card.name,
		linkedinUrl: card.linkedinUrl,
		githubUrl: card.githubUrl,
	}
}

export default {
	createCard,
	getCardById,
}
