import { pool } from "../client";
import { Request, Response } from "express";
import { generateAccessToken } from "../helper/generateToken";

export const signup = (req: Request, res: Response) => {
  const {  email, password, phone } = req.body;
  const query =
    "INSERT INTO user_info (email, password, phone) VALUES($1, $2, $3)";
  pool.query(
    query,
    [ email,password,phone],
    (err) => {
      if (err) {
        res.status(200).json({
          success: false,
          response: { error: err.message },
        });
      }
      const token = generateAccessToken(req, res);
      res.status(200).json({
        success: true,
        response: {
          body: {
            token: token,
          },
        },
      });
    }
  );
};
