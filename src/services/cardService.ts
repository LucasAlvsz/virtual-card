import { CardData } from "@/types/cardTypes"
import queryFactory from "@/factories/queryFactory"
import cardRepository from "@/repositories/cardRepository"
import { conflictError } from "@/errors"

const createCard = async (cardData: CardData) => {
	const card = await queryFactory.getByName(cardData.name, "Card")
	if (card) throw conflictError("Card already exists, please choose another name")
	await cardRepository.create(cardData)
}

export default {
	createCard,
}
