import { Request, Response } from "express"
import { CardData } from "@/types/cardTypes"
import cardService from "@/services/cardService"

const createCard = async (req: Request, res: Response) => {
	const cardData: CardData = req.body
	await cardService.createCard(cardData)
	res.sendStatus(201)
}

export { createCard }
