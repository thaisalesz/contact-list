import { Router } from "express";
import { sessionController } from "../../controllers/session.controller";

export const sessionRoute = Router()

sessionRoute.post('', sessionController)