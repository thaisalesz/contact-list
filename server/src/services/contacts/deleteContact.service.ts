import { AppError } from "../../errors"
import { prisma } from "../../prisma-client"

export const deleteContactService = 
    async (contactId: string):Promise<void> => {
        const contact = await prisma.contact.findUnique({
            where:{
                id: contactId
            }
        })

        if(!contact){
            throw new AppError('Contact not found', 404)
        }

        await prisma.contact.delete({
            where: {
                id: contactId
            }
        })
    }