import { Secret, sign } from "jsonwebtoken";
import { Response, Request } from "express";

export const generateAccessToken = (req: Request, res: Response) => {
  const token = sign(
    { email: req.body?.email },
    process.env.SECRET_TOKEN as Secret,
    {
      expiresIn: "1h",
    }
  );
  return token;
};
