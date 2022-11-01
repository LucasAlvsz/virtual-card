import { Router } from "express"
import "express-async-errors"

import handleError from "@/middlewares/handlerErrorMiddleware"
import cardRouter from "./cardRouter"

const router = Router()

router.use("/card", cardRouter)
router.use(handleError)

export default router
