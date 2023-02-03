export interface IClient{
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    createdAt: Date;
}

export interface IClientRequest{
    name: string;
    email: string;
    password: string;
    phone: string;
}

export interface IClientUpdate{
    name?: string;
    password?: string;
    phone?: string;
}

export interface ILogin{
    email: string;
    password: string;
}

export interface IContact{
    id: string;
    name: string;
    email: string | null;
    phone: string |null;
    createdAt: Date;
    updatedAt: Date;
    clientId: string;
}

export interface IContactRequest{
    name: string;
    email: string | null;
    phone: string | null;
}

export interface IContactUpdate{
    name?: string;
    email?: string;
    phone?: string;
}