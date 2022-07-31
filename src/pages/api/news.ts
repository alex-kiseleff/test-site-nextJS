import { NextApiRequest, NextApiResponse } from 'next';
import { db } from './data/DATA_BASE';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	if (req.method === 'GET') {
		const { news } = db;
		const newsCurrent = news.filter((item) => item.id === id);
		return res.status(200).json(newsCurrent);
	}
};

export default handler;
