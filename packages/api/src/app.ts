import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import formBodyPlugin from 'fastify-formbody';
import { db_plugin } from './lib/db';
import client_router from './routes/client.route';
import device_router from './routes/device.route';
import device_tank_router from './routes/device.tank.router';
import tank_router from './routes/tank.route';
import user_router from './routes/user.router';

const main_app: FastifyPluginAsync = async (app) => {
  app.register(db_plugin);

  await app.register(fastifyCors);

  app.register(formBodyPlugin);

  await app.register(client_router, { prefix: '/client' });
  await app.register(user_router, { prefix: '/user' });
  await app.register(tank_router, { prefix: '/tank' });
  await app.register(device_router, { prefix: '/device' });
  await app.register(device_tank_router, { prefix: '/device-tank' });
};

export default main_app;
