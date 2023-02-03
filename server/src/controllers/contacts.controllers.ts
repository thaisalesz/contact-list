import { Request, Response } from "express";
import { IContact, IContactRequest, IContactUpdate } from "../interfaces";
import { createContactService } from "../services/contacts/createContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";
import { listClientsContactsService } from "../services/contacts/listClientsContacts.service";
import { listContactService } from "../services/contacts/listContact.service";
import { updateContactService } from "../services/contacts/updateContact.service";


const createContactController = async (req: Request, res: Response):Promise<Response> => {
    const clientId: string = req.clientId
    const contactData: IContactRequest = req.body

    const newContact: IContact = await createContactService(contactData, clientId)

    return res.status(201).json(newContact)
}

const listClientsContactsController = async (req: Request, res: Response):Promise<Response> => {
    const clientId:string = req.clientId
    const contacts:IContact[] = await listClientsContactsService(clientId)

    return res.status(200).json(contacts)
}

const listContactController = async (req: Request, res: Response):Promise<Response> => {
    const contactId:string = req.params.contactId
    const contact:IContact = await listContactService(contactId)

    return res.status(200).json(contact)
}


const updateContactController = async (req: Request, res: Response):Promise<Response> => {
    const contactId:string = req.params.contactId
    const contactData:IContactUpdate = req.body

    const updatedContact = await updateContactService(contactData, contactId)

    return res.status(200).json(updatedContact)
}

const deleteContactController = async (req: Request, res: Response):Promise<Response> => {
    const contactId:string = req.params.contactId

    await deleteContactService(contactId)

    return res.status(204).send()
}

export { createContactController,
        listClientsContactsController,
        listContactController,
        updateContactController,
        deleteContactController}