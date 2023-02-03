import { Router } from 'express'
import { clientsRoutes } from './clients'
import { contactsRoutes } from './contacts'
import { sessionRoute } from './session'


export const appRoutes = Router()

appRoutes.use('/clients', clientsRoutes)
appRoutes.use('/login', sessionRoute)
appRoutes.use('/contacts', contactsRoutes)