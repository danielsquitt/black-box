import { FastifyPluginAsync } from 'fastify';
import formBodyPlugin from 'fastify-formbody';
import client_router from './routes/client.route';
import device_router from './routes/device.route';
import tank_router from './routes/tank.route';

const main_app: FastifyPluginAsync = async (app) => {
  app.register(formBodyPlugin);

  app.register(client_router, { prefix: '/client' });
  app.register(tank_router, { prefix: '/tank' });
  app.register(device_router, { prefix: '/device' });
};

export default main_app;
