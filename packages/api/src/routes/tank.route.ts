import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { FastifyParamIdRequest } from '../../types/types';

const list_tanks = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'get tanks: status OK' });
  reply.code(200);
};

const get_tank_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get tanks by id: status OK',
    id,
  });
  reply.code(200);
};

const new_tank = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: 'new tanks: status OK' });
  reply.code(200);
};

const update_tank_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'get tanks by id: status OK',
    id,
  });
  reply.code(200);
};

const delete_tank_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  reply.send({
    message: 'delete tanks by id: status OK',
    id,
  });
  reply.code(200);
};

const tank_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_tanks);
  app.get('/:id', get_tank_byId);
  app.post('/', new_tank);
  app.post('/:id', update_tank_by_id);
  app.delete('/:id', delete_tank_by_id);
};

export default tank_router;
