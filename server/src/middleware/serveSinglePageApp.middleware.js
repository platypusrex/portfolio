import send from 'koa-send';
import path from 'path';

export function serveSPA (indexPath) {
	const opts = {root: path.resolve(path.dirname(indexPath))};
	const fileName = path.basename(indexPath);

	let middleware = async (ctx, next) => {
		await next();

		// do not send single page app for api endpoints
		if (/\/api(\/|$)/.test(ctx.path)) return ctx;
		// do not send single page app for CUD actions
		if (ctx.method !== 'HEAD' && ctx.method !== 'GET') return ctx;
		// do not send single page app if response is already handled
		if (ctx.body != null || ctx.status !== 404) return ctx;

		return send(ctx, fileName, opts);
	};

	return middleware;
}