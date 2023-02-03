import { IContact, IContactRequest } from "../../interfaces";
import { prisma } from "../../prisma-client";


export const createContactService = 
    async (data: IContactRequest, clientId: string): Promise<IContact> => {
        const newContact = await prisma.contact.create({
            data:{
                ...data,
                client: {
                    connect:{
                        id: clientId
                    
                    }
                } 
            }
        })

        return newContact
       
    }