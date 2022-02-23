import { FastifyRequest } from 'fastify';

// Fastify request with id query param
export type FastifyParamIdRequest = FastifyRequest<{
  Params: { id: string }
}>;
