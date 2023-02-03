import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";


export const createContactController = async (req: Request, res: Response):Promise<Response> => {
    const clientId = req.clientId
    const contactData = req.body

    const newContact = await createContactService(contactData, clientId)

    return res.status(201).json({newContact})
}