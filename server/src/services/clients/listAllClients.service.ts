import { IClient } from "../../interfaces"
import { prisma } from "../../prisma-client"


export const listAllClientsService = async ():Promise<IClient[]> => {
    return await prisma.client.findMany()
}