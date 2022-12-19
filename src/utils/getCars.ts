import { readJSONFile } from "./readJSONFile";

export const getCars = async () => await readJSONFile('/public/api/cars.json');