import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { client } from '../../lib/fetcher';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  // console.log('new client request', req);
  const { accessToken } = await getAccessToken(req, res);
  // console.log(accessToken);

  const response = await client.get('/verify', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  res.status(200).json(response.data);
  // console.log(response);

  if (req.method === 'GET') {
    try {
      const res_api = await client.get('/client', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      res.status(res_api.status).send(res_api.data);
    } catch (error) {
      res.status(500).send(error);
    }
  } else if (req.method === 'POST') {
    try {
      const res_api = await client.post('/client', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      res.status(res_api.status).send(res_api.data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});
