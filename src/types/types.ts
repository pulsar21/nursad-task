export interface IProduct {
    id: number,
    name: string,
    group: string,
    product_code: string,
    volume: number,
    price: number,
    src: string
}

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    avatar: string
}

export interface IFeedback {
    id: number,
    rating: number,
    date: string,
    description: string,
    user: IUser[]
}

export interface ICompany {
    id: number
    name: string
    industries: string
    city: string
    description: string
    location: string,
    bin: string,
    phone: string[],
    email: string,
    feedbacks?: IFeedback[],
    products?: IProduct[]
}