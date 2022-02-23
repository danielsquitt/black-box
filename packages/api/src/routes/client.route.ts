import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyParamIdRequest } from '../../types/types';

const list_clients = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'get clients: status OK' });
  reply.code(200);
};

const get_client_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get clients by id: status OK',
    id,
  });
  reply.code(200);
};

const new_client = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'new clients: status OK' });
  reply.code(200);
};

const update_client_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get clients by id: status OK',
    id,
  });
  reply.code(200);
};

const delete_client_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'delete clients by id: status OK',
    id,
  });
  reply.code(200);
};

const client_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_clients);
  app.get('/:id', get_client_byId);
  app.post('/', new_client);
  app.post('/:id', update_client_by_id);
  app.delete('/:id', delete_client_by_id);
};

export default client_router;
