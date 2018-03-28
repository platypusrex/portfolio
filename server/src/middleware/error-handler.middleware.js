export async function errorHandler (ctx, next) {
	try {
		await next();
	} catch (err) {
		console.log('error:', err);
		ctx.body = {
			type: 'error',
			message: err.message
		};

		ctx.status = err.status || 500;
	}
}