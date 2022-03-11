/* eslint-disable prefer-promise-reject-errors */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { isValidId } from '../lib/db';
import User, { UserRole, UserState } from '../models/user.model';

const list_users = async (request: any, reply: FastifyReply) => {
  const {
    user_custom: {
      state = undefined, role = undefined, client_id = undefined,
    } = {},
  } = request;
  if (!state) {
    reply.code(200).send([]);
  } else if (state === UserState.PENDING || role === UserRole.PROD) {
    reply.code(200).send([request.user_custom]);
  } else if (state === UserState.CONFIRM) {
    let query = {};
    if (role === UserRole.ADMIN) query = { client_id };

    User.find(query).lean().then((data) => {
      reply.code(200).send(data);
    }).catch((error) => {
      reply.code(500).send({ message: error });
    });
  }
  return reply;
};

const get_user_byId = async (request: any, reply: FastifyReply) => {
  const { id } = request.params;
  const {
    user_custom: {
      state, role, _id,
    },
  } = request;
  if (state !== UserState.CONFIRM) {
    return reply.code(403).send({ message: 'Forbidden' });
  }
  if (role !== UserRole.SUPERADMIN && id === _id) {
    return reply.code(200).send(request.user_custom);
  }

  if (!isValidId(id)) {
    return reply.code(400).send({ message: `Id ${id} is not a valid Id` });
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

  return reply;
};

type CustomRequest = FastifyRequest<{
  User: { sub: string },
  Body: { client_id: string, name: string }
}>;

const new_user = async (request: CustomRequest, reply: FastifyReply) => {
  const user = {
    user_id: (request.user as { sub: string }).sub,
    client_id: request.body.client_id,
    name: request.body.name,
  };

  User.create(user).then((data) => {
    reply.code(200).send(data);
  }).catch((error) => {
    reply.code(500).send({ message: error });
  });
  return reply;
};

const update_user_by_id = async (request: any, reply: FastifyReply) => {
  const { id } = request.params;
  const {
    user_custom: {
      state, role, client_id, _id,
    },
  } = request;
  if (state !== UserState.CONFIRM) {
    return reply.code(403).send({ message: 'Forbidden' });
  }

  let query = {};
  switch (role) {
    case UserRole.SUPERADMIN:
      query = { _id: id };
      break;
    case UserRole.ADMIN:
      query = { _id: id, client_id };
      break;
    case UserRole.PROD:
      query = { _id: id, client_id, user_id: _id };
      break;

    default:
      reply.code(500).send({ message: 'Unknown role' });
      break;
  }

  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    User.findOneAndUpdate(query, request.body).lean()
      .then((data) => {
        if (data) {
          const new_data = { ...data, ...(request.body) };
          reply.code(200).send(new_data);
        } else {
          reply.code(404).send({ message: `user with id ${id} not found` });
        }
      }).catch((error) => {
        reply.code(500).send({ message: error });
      });
  }
  return reply;
};

const delete_user_by_id = async (request: any, reply: FastifyReply) => {
  const { id } = request.params;
  const {
    user_custom: {
      state, role, client_id,
    },
  } = request;
  if (state !== UserState.CONFIRM) {
    return reply.code(403).send({ message: 'Forbidden' });
  }
  let query = {};
  if (role === UserRole.ADMIN) {
    query = { client_id, _id: id };
  }
  if (role === UserRole.PROD) {
    query = { _id: id };
  }
  if (!isValidId(id)) {
    reply.code(400).send({ message: `Id ${id} is not a valid Id` });
  } else {
    User.findOneAndDelete(query).lean()
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
  return reply;
};

const user_router: FastifyPluginAsync = async (app) => {
  app.get('/', list_users);
  app.get('/:id', get_user_byId);
  app.post('/', new_user);
  app.post('/:id', update_user_by_id);
  app.delete('/:id', delete_user_by_id);
};

export default user_router;

/*
user: {
    iss: 'https://theblackbox.eu.auth0.com/',
    sub: 'google-oauth2|106450345766288330983',
    aud: [ 'blackbox-api', 'https://theblackbox.eu.auth0.com/userinfo' ],
    iat: 1646866463,
    exp: 1646952863,
    azp: '84CLNYZN1c80rj25Y2VVEBCwAAdHh7TZ',
    scope: 'openid profile email read:client'
  },
  user_custom: {
    _id: new ObjectId("6227dbeba1c03ca00fe64300"),
    user_id: 'google-oauth2|106450345766288330983',
    name: 'Daniel Squittieri',
    state: 'confirmed',
    role: 'superadmin',
    created_at: 2022-03-08T22:42:51.543Z,
    updated_at: 2022-03-08T22:42:51.543Z,
    __v: 0
  },
  */
