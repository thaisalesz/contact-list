import { Router } from 'express'
import { createClientController, 
        deleteClientController, 
        listAllClientsController, 
        listClientController, 
        updateClientController } from '../controllers/clients.controllers'
import { sessionController } from '../controllers/session.controller'
import { authenticationMiddleware } from '../middlewares/auth.middleware'
import { checkClientIdMiddleware } from '../middlewares/checkClientId.middleware'


const appRoutes = Router()


appRoutes.get('/clients', authenticationMiddleware,
                            listAllClientsController)

appRoutes.post('/clients', createClientController)

appRoutes.get('/clients/:id', authenticationMiddleware,
                                listClientController)

appRoutes.patch('/clients/:id', authenticationMiddleware,
                                checkClientIdMiddleware,
                                updateClientController)
                                
appRoutes.delete('/clients/:id', authenticationMiddleware,
                                    checkClientIdMiddleware,
                                    deleteClientController)


appRoutes.post('/login', sessionController)


export { appRoutes }