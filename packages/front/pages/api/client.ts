import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../lib/fetcher';

export default (async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('new client request', req);
  if (req.method === 'GET') {
    try {
      const res_api = await client.get('/client');
      res.status(res_api.status).send(res_api.data);
    } catch (error) {
      res.status(500).send(error);
    }
  } else if (req.method === 'POST') {
    try {
      const res_api = await client.post('/client');
      res.status(res_api.status).send(res_api.data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});
