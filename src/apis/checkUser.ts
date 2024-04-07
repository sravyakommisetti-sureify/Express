import { Response, Request } from "express";
import { pool } from "../client";
import { generateAccessToken } from "../helper/generateToken";

export const checkUser = (req: Request, res: Response) => {
  const email = req.body.email;
  const query = `SELECT id,email FROM user_info WHERE email=$1`;
  pool.query(query, [email], (err, results) => {
    if (err) {
      throw err;
    }
    const valid = results.rows.length > 0;

    res.status(200).json({
      success: valid,
    });
  });
};
