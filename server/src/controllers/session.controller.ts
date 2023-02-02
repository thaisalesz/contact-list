import { Request, Response } from "express";
import { ILogin } from "../interfaces";
import { sessionService } from "../services/session/session.service";


export const sessionController = async (req: Request, res: Response):Promise<Response> => {
    const clientData:ILogin = req.body

    const token:string = await sessionService(clientData)

    return res.status(200).json({token: token})
}

