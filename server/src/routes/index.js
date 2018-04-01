import { combineRouters } from "../utils/routes-loader.util";
import citiesRouter from './cities.routes';
import sendEmailRouter from './send-email.routes';

export const router = combineRouters([citiesRouter, sendEmailRouter]);
