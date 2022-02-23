// eslint-disable-next-line import/no-unresolved
import fastify from 'fastify';
import { PORT } from './config';

const server = fastify({
  logger: {
    prettyPrint: true,
  },
  disableRequestLogging: true,
});

server.listen(PORT, '0.0.0.0');
