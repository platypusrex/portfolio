import compose from 'koa-compose';

export function combineRouters (routers) {
	if (!Array.isArray(routers)) {
		routers = Array.prototype.slice.call(arguments)
	}

	let middleware = [];

	routers.forEach(function (router) {
		middleware.push(router.routes());

		if (router.allowedMethods) {
			middleware.push(router.allowedMethods())
		}
	});

	return compose(middleware)
}