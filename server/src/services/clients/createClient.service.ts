import { hashSync } from "bcrypt";
import { AppError } from "../../errors";
import { IClient, IClientRequest } from "../../interfaces";
import { prisma } from "../../prisma-client";


export const createClientService = async (data: IClientRequest):Promise<IClient> => {
    const emailAlreadyRegistered = await prisma.client.findUnique({
        where:{
            email: data.email
        }
    })

    if(emailAlreadyRegistered){
        throw new AppError('Email is already being used')
    }

    const hashPass = hashSync(data.password, 10)

    const newClient = await prisma.client.create({data: {...data, password: hashPass}})

    return newClient
}