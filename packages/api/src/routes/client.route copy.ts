/* eslint-disable prefer-promise-reject-errors */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { isValidId } from '../lib/db';
import Client from '../models/client.model';
import { FastifyParamIdRequest, FastifyPrmIdBodyRequest, FastifyBodyRequest } from '../types/types';

const list_clients = async (request: FastifyRequest, reply: FastifyReply) => {
  Client.find().lean().then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const get_client_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  }
  Client.findById(id).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `Client with id ${id} not found` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
};

const new_client = async (request: FastifyBodyRequest<any>, reply: FastifyReply) => {
  Client.create(request.body).then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const update_client_by_id = async (request: FastifyPrmIdBodyRequest<any>, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Client.findByIdAndUpdate(id, request.body).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `Client with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const delete_client_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    Client.findByIdAndDelete(id).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `Client with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const client_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_clients);
  app.get('/:id', get_client_byId);
  app.post('/', new_client);
  app.patch('/:id', update_client_by_id);
  app.delete('/:id', delete_client_by_id);
};

export default client_router;
