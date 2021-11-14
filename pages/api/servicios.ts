import { NextApiRequest, NextApiResponse } from "next"
import mockData from "../../database/mock.json"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const servicios = mockData.servicios
  res.json(servicios)
}
