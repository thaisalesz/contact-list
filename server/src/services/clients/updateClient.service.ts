import { hashSync } from "bcrypt";
import { AppError } from "../../errors";
import { IClientUpdate } from "../../interfaces";
import { prisma } from "../../prisma-client";


export const updateClientService = async (id: string, data: IClientUpdate) => {
    const client = await prisma.client.findUnique({where: {id: id}})

    if(!client){
        throw new AppError('Client not found', 404)
    }
    
    const validFields = ["name", "password", "phone"]

    const checkInvalidFields = Object.keys(data).some((key) => !validFields.includes(key))

    if(checkInvalidFields){
        throw new AppError('Invalid Key', 403)
    }

    if(data.password){
        const hashPass = hashSync(data.password, 10)
        data.password = hashPass
    }

    const updatedClient = await prisma.client.update({
        where:{
            id:id
        },
        data:{
            ...data
        }
    })

    return updatedClient
}