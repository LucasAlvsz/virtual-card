import { Request, Response } from "express"
import { CardData } from "@/types/cardTypes"
import cardService from "@/services/cardService"

const createCard = async (req: Request, res: Response) => {
	const cardData: CardData = req.body
	const cardId = await cardService.createCard(cardData)
	res.status(201).send(cardId)
}

const getCardById = async (req: Request, res: Response) => {
	const { id } = req.params
	const card = await cardService.getCardById(id)
	res.send(card)
}

export { createCard, getCardById }
