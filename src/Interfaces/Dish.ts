import {Restaurant} from "./Restaurant";

export interface Dish {
    name: string,
    description: string,
    restaurant: Restaurant,
    img: string,
    price: number,
    properties: string,
    signature: boolean
}

