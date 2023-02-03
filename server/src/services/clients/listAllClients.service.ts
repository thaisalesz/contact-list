import { IClient } from "../../interfaces"
import { prisma } from "../../prisma-client"
import { excludeFields } from "../../utils/excludeFields"


export const listAllClientsService = async ():Promise<Omit <IClient, 'password'>[]> => {
    const clients = await prisma.client.findMany()
    const clientsWithoutPass = clients.map((client) => excludeFields(client, ['password']))

    return clientsWithoutPass
}