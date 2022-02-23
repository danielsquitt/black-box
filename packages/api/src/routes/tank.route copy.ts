/* eslint-disable prefer-promise-reject-errors */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { isValidId } from '../lib/db';
import Tank from '../models/tank.model';
import { FastifyParamIdRequest, FastifyPrmIdBodyRequest, FastifyBodyRequest } from '../types/types';

const list_tanks = async (request: FastifyRequest, reply: FastifyReply) => {
  Tank.find().lean().then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const get_tank_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  }
  Tank.findById(id).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `tank with id ${id} not found` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
};

const new_tank = async (request: FastifyBodyRequest<any>, reply: FastifyReply) => {
  Tank.create(request.body).then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const update_tank_by_id = async (request: FastifyPrmIdBodyRequest<any>, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Tank.findByIdAndUpdate(id, request.body).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `tank with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const delete_tank_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Tank.findByIdAndDelete(id).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `tank with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const tank_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_tanks);
  app.get('/:id', get_tank_byId);
  app.post('/', new_tank);
  app.patch('/:id', update_tank_by_id);
  app.delete('/:id', delete_tank_by_id);
};

export default tank_router;
