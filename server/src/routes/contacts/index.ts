import { Router } from "express";
import { createContactController } from "../../controllers/contacts.controllers";
import { authenticationMiddleware } from "../../middlewares/auth.middleware";
import { checkClientIdMiddleware } from "../../middlewares/checkClientId.middleware";

export const contactsRoutes = Router()

contactsRoutes.post('', authenticationMiddleware,
                        createContactController)
