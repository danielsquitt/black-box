import { FastifyRequest } from 'fastify';

// Fastify request with id query param
export type FastifyParamIdRequest = FastifyRequest<{
  Params: { id: string }
}>;

export type FastifyBodyRequest<T> = FastifyRequest<{
  Body: T
}>;

export type FastifyPrmIdBodyRequest<T> = FastifyRequest<{
  Params: { id: string },
  Body: T
}>;
