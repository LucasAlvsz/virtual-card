import prisma from "@/db"
import { Prisma } from "@prisma/client"

const getById = async (id: string, model: Prisma.ModelName) => {
	return await prisma[model].findUnique({
		where: { id },
	})
}

export default { getById }
