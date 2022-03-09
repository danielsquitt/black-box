import { FastifyPluginAsync, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import User from '../models/user.model';

export const has_user = async (
  req: FastifyRequest,
): Promise<null | { sub: string }> => {
  try {
    const user = await req.jwtVerify<{ sub: string }>();
    return user;
  } catch (error) {
    return null;
  }
};

const Authorization: FastifyPluginAsync = async (app) => {
  app.addHook('preValidation', app.authenticate);
  app.addHook('preHandler', async (request: any) => {
    try {
      // const user =
      await User.findOne({ user_id: request.user.sub });
      // console.log('USER', user);
    } catch (error) {
      // console.log('USER', `${request.user.sub} No found`);
    }
  });
};

export default fp(Authorization);
