import { Router } from 'express'
import { createClientController, deleteClientController, listAllClientsController, listClientController, updateClientController } from '../../controllers/clients.controllers'
import { authenticationMiddleware } from '../../middlewares/auth.middleware'
import { checkClientIdMiddleware } from '../../middlewares/checkClientId.middleware'

export const clientsRoutes = Router()

clientsRoutes.get('', authenticationMiddleware,
                            listAllClientsController)

clientsRoutes.post('', createClientController)

clientsRoutes.get('/:id', authenticationMiddleware,
                                listClientController)

clientsRoutes.patch('/:id', authenticationMiddleware,
                                checkClientIdMiddleware,
                                updateClientController)
                                
clientsRoutes.delete('/:id', authenticationMiddleware,
                                    checkClientIdMiddleware,
                                    deleteClientController)