import { IContact } from "../../interfaces"
import { prisma } from "../../prisma-client"

export const listClientsContactsService = 
    async (clientId: string):Promise<IContact[]> => {
        const contacts = await prisma.contact.findMany({
            where:{
                clientId: clientId
            }
        })

        return contacts
    }
