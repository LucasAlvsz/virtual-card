import { Card } from "@prisma/client"

type CardData = Omit<Card, "id" | "createdAt">

export { CardData }
