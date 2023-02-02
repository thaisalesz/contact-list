import { AppError } from "../../errors"
import { prisma } from "../../prisma-client"

export const listClientService = async (id: string) => {
    const client = await prisma.client.findUnique({
        where:{
            id: id
        }
    })

    if(!client){
        throw new AppError('Client not found', 404)
    }

    return client
}