/* eslint-disable prefer-promise-reject-errors */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { isValidId } from '../lib/db';
import User from '../models/user.model';
import { FastifyParamIdRequest, FastifyPrmIdBodyRequest, FastifyBodyRequest } from '../types/types';

const list_users = async (request: FastifyRequest, reply: FastifyReply) => {
  User.find().lean().then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const get_user_byId = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  }
  User.findById(id).lean()
    .then((data) => {
      if (data) {
        reply.code(200).send(data);
      } else {
        reply.code(404).send({ message: `user with id ${id} not found` });
      }
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
};

const new_user = async (request: FastifyBodyRequest<any>, reply: FastifyReply) => {
  User.create(request.body).then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
};

const update_user_by_id = async (request: FastifyPrmIdBodyRequest<any>, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    User.findByIdAndUpdate(id, request.body).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `user with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const delete_user_by_id = async (request: FastifyParamIdRequest, reply: FastifyReply) => {
  const { id } = request.params;
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    User.findByIdAndDelete(id).lean()
      .then((data) => {
        if (data) {
          reply.code(200).send(data);
        } else {
          reply.code(404).send({ message: `user with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
};

const user_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_users);
  app.get('/:id', get_user_byId);
  app.post('/', new_user);
  app.patch('/:id', update_user_by_id);
  app.delete('/:id', delete_user_by_id);
};

export default user_router;
