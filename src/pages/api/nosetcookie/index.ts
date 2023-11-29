import type { NextApiRequest, NextApiResponse } from "next";
type ResponseData = {
  samlToken?: string;
  message?: string;
};

// const rand = function () {
//   return Math.random().toString(36).substr(2); // remove `0.`
// };

// const token = function () {
//   return rand() + rand(); // to make it longer
// };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  res
    .status(200)
    .json({ message: `success - ${new Date().getTime().toString(36)}` });
}
