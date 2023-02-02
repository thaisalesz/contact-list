import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const checkClientIdMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const requestClientId = req.params.id
    const clientId = req.clientId

    if(clientId != requestClientId){
        throw new AppError('Unauthorized', 403)
    }

    return next()
}