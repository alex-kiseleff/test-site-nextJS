import { NextApiRequest, NextApiResponse } from 'next';
import { db } from './data/DATA_BASE';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		return res.status(200).json(db);
	}
};

export default handler;
