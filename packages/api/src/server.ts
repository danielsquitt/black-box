// eslint-disable-next-line import/no-unresolved
import fastify from 'fastify';
import main_app from './app';
import { PORT } from './config';

const server = fastify({
  logger: {
    prettyPrint: true,
    serializers: {
      res(reply) {
        // The default
        return {
          statusCode: reply.statusCode,
        };
      },
      req(request) {
        return {
          method: request.method,
          url: request.url,
          path: request.routerPath,
          parameters: request.params,
          headers: request.headers,
        };
      },
    },
  },
});

server.register(main_app);

server.listen(PORT, '0.0.0.0');
