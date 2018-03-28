import { routesLoader } from "../utils/routes-loader.util";

export function router (app) {
	routesLoader(`${__dirname}`).then(files => {
		files.forEach(route => {
			app
				.use(route.routes())
				.use(route.allowedMethods({
					throw: true
				}));
		});
	});
}