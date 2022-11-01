import prisma from "@/db"
import { Prisma } from "@prisma/client"

const getByName = async (name: string, model: Prisma.ModelName) => {
	return await prisma[model].findUnique({
		where: { name },
	})
}

export default { getByName }
