import { Movie } from './movie';

export interface User{
    id: number,
    firstName: string,
    lastName: string,
    zipCode: number,
    Movies: Movie[]
}