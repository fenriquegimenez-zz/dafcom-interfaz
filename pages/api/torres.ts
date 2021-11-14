import { NextApiRequest, NextApiResponse } from "next"
import mockData from "../../database/mock.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const torres = mockData.torres
  res.json(torres)
}
