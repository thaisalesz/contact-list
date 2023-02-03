import { Request, Response } from "express"
import { IClient, IClientRequest, IClientUpdate } from "../interfaces"
import { createClientService } from "../services/clients/createClient.service"
import { deleteClientService } from "../services/clients/deleteClient.service"
import { listAllClientsService } from "../services/clients/listAllClients.service"
import { listClientService } from "../services/clients/listClient.service"
import { updateClientService } from "../services/clients/updateClient.service"


const createClientController = async (req:Request, res: Response):Promise<Response> => {
    const clientData: IClientRequest = req.body
    const newClient:IClient = await createClientService(clientData)

    return res.status(201).json(newClient)
}

const listAllClientsController = async (req:Request, res: Response):Promise<Response> => {
    const clients:Omit<IClient, "password">[] = await listAllClientsService()
    return res.status(200).json(clients)
}

const listClientController = async (req:Request, res: Response):Promise<Response> => {
    const clientId: string = req.params.id
    const client: IClient = await listClientService(clientId)

    return res.status(200).json(client)
}

const updateClientController = async (req:Request, res: Response):Promise<Response> => {
    const clientId: string = req.params.id
    const clientData: IClientUpdate = req.body

    const updatedClient:IClient = await updateClientService(clientId, clientData)

    return res.status(200).json(updatedClient)
}

const deleteClientController = async (req:Request, res: Response):Promise<Response> => {
    const clientId:string = req.params.id
    
    await deleteClientService(clientId)
    return res.status(204).send()
}


export { createClientController, 
        listAllClientsController,
        listClientController,
        updateClientController,
        deleteClientController }