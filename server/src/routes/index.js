import { combineRouters } from "../utils/routes-loader.util";
import citiesRouter from './cities.routes';

export const router = combineRouters([citiesRouter]);
