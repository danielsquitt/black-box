import { client } from '../../lib/fetcher';

export default (async (req, res) => {
  if (req.method === 'GET') {
    try {
      const res_api = await client.get('/client');
      console.log(res_api);
    } catch (error) {
      console.log(error);
    }
  }
});
