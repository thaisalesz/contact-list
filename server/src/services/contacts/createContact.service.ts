import { IContactRequest } from "../../interfaces";
import { prisma } from "../../prisma-client";


export const createContactService = async (data: IContactRequest, clientId: string) => {
    const newContact = await prisma.contact.create({
        data: {
            ...data,
            client:{
                connect:{
                    id: clientId
                }
            }
        },
        include:{
            client: true
        }
    })
    return newContact
}