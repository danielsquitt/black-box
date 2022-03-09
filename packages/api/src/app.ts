import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import formBodyPlugin from 'fastify-formbody';
import fastifyAuth0 from 'fastify-auth0-verify';
import { db_plugin } from './lib/db';
import client_router from './routes/client.route';
import device_router from './routes/device.route';
import device_tank_router from './routes/device.tank.router';
import tank_router from './routes/tank.route';
import user_router from './routes/user.router';
import { AUTH0_AUDIENCE, AUTH0_DOMAIN } from './config';
import Authorization from './lib/jwt';

const main_app: FastifyPluginAsync = async (app) => {
  app.register(db_plugin);

  await app.register(fastifyCors);

  await app.register(formBodyPlugin);

  await app.register(fastifyAuth0, {
    domain: AUTH0_DOMAIN,
    audience: AUTH0_AUDIENCE,
  });

  await app.register(Authorization);

  app.get('/verify', {
    handler(request, reply) {
      reply.send(request.user);
    },
    preValidation: app.authenticate,
  });

  await app.register(client_router, { prefix: '/client' });
  await app.register(user_router, { prefix: '/user' });
  await app.register(tank_router, { prefix: '/tank' });
  await app.register(device_router, { prefix: '/device' });
  await app.register(device_tank_router, { prefix: '/device-tank' });
};

export default main_app;
