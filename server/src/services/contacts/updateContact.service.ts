import { AppError } from "../../errors";
import { IContact, IContactUpdate } from "../../interfaces";
import { prisma } from "../../prisma-client";


export const updateContactService = 
    async (data: IContactUpdate, contactId: string):Promise<IContact> => {
        const contact = await prisma.contact.findUnique({
            where:{
                id: contactId
            }
        })

        if(!contact){
            throw new AppError('Contact not found', 404)
        }

        const updatedContact = await prisma.contact.update({
            where: {
                id: contactId
            },
            data: {
                ...data
            }
        })

        return updatedContact
}