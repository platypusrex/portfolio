import Router from 'koa-router';

const basePath = '/cities';
const router = new Router();

router
	.prefix(basePath)
	.get('/', async (ctx) => {
		ctx.body = [
			{name: 'Charleston', population: 80000},
			{name: 'Asheville', population: 65000},
			{name: 'Atlanta', population: 1500000}
		];
	});

export default router;
