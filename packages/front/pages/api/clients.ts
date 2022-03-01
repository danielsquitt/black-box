import { client } from '../../lib/fetcher';

export default (async (req, res) => {
  if (req.method === 'GET') {
    const res_api = await client.get('/bottlecaps');
    console.log(res_api);
  }
});
