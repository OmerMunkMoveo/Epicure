import {Restaurant} from "./Restaurant";

export interface Chef {
    name: string,
    description: string,
    img: string,
    restaurants: Restaurant[]
}

