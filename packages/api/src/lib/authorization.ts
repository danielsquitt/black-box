import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';
import User from '../models/user.model';

const Authorization: FastifyPluginAsync = async (app) => {
  app.addHook('preValidation', app.authenticate);
  app.decorateRequest('user_custom', '');
  app.addHook('preHandler', async (request: any) => {
    const user = await User.findOne({ user_id: request.user.sub });
    request.user_custom = user || undefined;
  });
};

export default fp(Authorization);
