import { Router } from 'express'
import { createClientController, deleteClientController, listAllClientsController, listClientController, updateClientController } from '../controllers/clients.controllers'
import { sessionController } from '../controllers/session.controller'


const appRoutes = Router()


appRoutes.get('/clients', listAllClientsController)
appRoutes.post('/clients', createClientController)
appRoutes.get('/clients/:id', listClientController)
appRoutes.patch('/clients/:id', updateClientController)
appRoutes.delete('/clients/:id', deleteClientController)

appRoutes.post('/login', sessionController)


export { appRoutes }