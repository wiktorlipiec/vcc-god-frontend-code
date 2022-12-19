import { ICar } from "../types/car";

type TIdParam = string | string[] | undefined

export const filterCarById = (cars: ICar[], id: TIdParam) => cars.filter(car => car.id === id)[0];