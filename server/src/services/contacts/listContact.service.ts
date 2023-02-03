import { AppError } from "../../errors"
import { IContact } from "../../interfaces"
import { prisma } from "../../prisma-client"


export const listContactService = 
    async (contactId: string):Promise<IContact> => {
        const contact = await prisma.contact.findUnique({
            where:{
                id: contactId
            }
        })

        if(!contact){
            throw new AppError('Contact not found', 404)
        }

        return contact
    }