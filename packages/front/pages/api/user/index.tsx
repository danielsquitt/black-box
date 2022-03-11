import { NextApiRequest, NextApiResponse } from 'next';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { api_client } from '../../../lib/fetcher';

export default withApiAuthRequired(async (req: NextApiRequest, res: NextApiResponse) => {
  const { accessToken } = await getAccessToken(req, res);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  switch (req.method) {
    case 'POST': {
      const res_api = await api_client.post('/user', req.body, { headers });
      res.status(res_api.status).send(res_api.data);
      break;
    }
    case 'GET': {
      const res_api = await api_client.get('/user', { headers });
      res.status(res_api.status).send(res_api.data);
      break;
    }
    default:
      res.status(500).send('Unknown method');
      break;
  }
});
