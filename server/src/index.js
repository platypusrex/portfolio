import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import cors from 'kcors';
import serve from 'koa-static';
import { errorHandler } from "./middleware/error-handler.middleware";
import { serveSPA } from "./middleware/serveSinglePageApp.middleware";
import { router } from "./routes";
import { port } from "./config";

const app = new Koa();

app
	.use(cors())
	.use(errorHandler)
	.use(logger())
	.use(bodyParser())
	.use(serveSPA('../client/build/index.html'))
	.use(serve('../client/build'))
	.use(router);

app.listen(port, () => console.log(`The server is running on port ${port}`));