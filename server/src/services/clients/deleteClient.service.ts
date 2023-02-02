import { AppError } from "../../errors"
import { prisma } from "../../prisma-client"


export const deleteClientService = async (id:string):Promise<void> => {
    const client = await prisma.client.findUnique({where: {id: id}})

    if(!client){
        throw new AppError('Client not found', 404)
    }

    await prisma.client.delete({
        where:{
            id: id
        }
    })
}