import { Card } from "@prisma/client"
import queryFactory from "@/factories/queryFactory"
import cardRepository from "@/repositories/cardRepository"
import cardService from "@/services/cardService"
import { createCardData } from "../factories/cardFactory"

beforeEach(() => {
	jest.clearAllMocks()
})

describe("Card Service", () => {
	describe("create a card", () => {
		it("should create a new card and return its id", async () => {
			jest.spyOn(cardRepository, "create").mockResolvedValue({
				id: "cardId",
			} as unknown as Card)
			const response = await cardService.createCard(createCardData())
			expect(response).toEqual({ cardId: "cardId" })
		})
	})
	describe("get a card by id", () => {
		it("should get a card by id and return its data", async () => {
			const cardData = createCardData()
			jest.spyOn(queryFactory, "getById").mockResolvedValue(cardData)
			const response = await cardService.getCardById("id")
			expect(response).toEqual(cardData)
		})
		it("should throw an error if the card does not exist", async () => {
			jest.spyOn(queryFactory, "getById").mockResolvedValue(null)
			await expect(cardService.getCardById("id")).rejects.toHaveProperty("status", 404)
		})
	})
})
