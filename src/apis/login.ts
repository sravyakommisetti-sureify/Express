import { Response, Request } from "express";
import { pool } from "../client";
import { generateAccessToken } from "../helper/generateToken";

export const login = (req: Request, res: Response) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT id,email FROM user_info WHERE email=$1 AND password=$2`;
  pool.query(query, [email, password], (err, results) => {
    if (err) {
      throw err;
    }
    const valid = results.rows.length > 0;
    const responseMessage = valid ? "Valid user" : "Invalid credentials";
    const token = valid ? generateAccessToken(req, res) : undefined;
    res.status(200).json({
      success: valid,
      response: { body: { token, message: responseMessage } },
    });
  });
};
