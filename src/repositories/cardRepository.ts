import prisma from "@/db"
import { CardData } from "@/types/cardTypes"

const create = (data: CardData) => {
	return prisma.card.create({
		data,
	})
}

export default {
	create,
}
