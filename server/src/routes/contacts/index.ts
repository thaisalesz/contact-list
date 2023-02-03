import { Router } from "express";
import { createContactController, deleteContactController, listClientsContactsController, listContactController, updateContactController } from "../../controllers/contacts.controllers";
import { authenticationMiddleware } from "../../middlewares/auth.middleware";

export const contactsRoutes = Router()

contactsRoutes.post('', authenticationMiddleware,
                        createContactController)

contactsRoutes.get('', authenticationMiddleware,
                    listClientsContactsController)

contactsRoutes.get('/:contactId', authenticationMiddleware,
                                    listContactController)

contactsRoutes.patch('/:contactId', authenticationMiddleware,
                                    updateContactController)
                                    
contactsRoutes.delete('/:contactId', authenticationMiddleware,
                                        deleteContactController)                               

