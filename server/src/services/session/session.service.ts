import { compareSync } from "bcrypt";
import { AppError } from "../../errors";
import { ILogin } from "../../interfaces";
import { prisma } from "../../prisma-client";
import jwt from 'jsonwebtoken'


export const sessionService = async (data: ILogin):Promise<string> => {
    const validFields = ["email", "password"]
    const checkInvalidFields = Object.keys(data).some((key) => !validFields.includes(key))
    const checkRequiredFields = validFields.some((key) => !Object.keys(data).includes(key))

    if(checkInvalidFields){
        throw new AppError('Invalid Key')
    }

    if(checkRequiredFields){
        throw new AppError('Missing fields')
    }

    const client = await prisma.client.findUnique({
        where: {
            email: data.email
        }
    })

    if(!client){
        throw new AppError('Invalid email or password', 401)
    }

    const checkPassword = compareSync(data.password, client.password)

    if(!checkPassword){
        throw new AppError('Invalid email or password', 401)
    }

    const token = jwt.sign(
        {
            clientId: client.id
        },
        process.env.SECRET_KEY as string,
        {
            expiresIn: '5d'
        }
    )

    return token
}