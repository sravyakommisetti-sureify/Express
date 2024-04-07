import { NextFunction, Request, Response } from "express";
import { pool } from "../client";

const jwt = require("jsonwebtoken");
export function verifyToken(
  req: Request<{}, {}, { userId: string }>,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token.slice(7), process.env.SECRET_TOKEN);
    const query = `SELECT * FROM user_info WHERE email=$1`;
    console.log(decoded);
    pool.query(query, [decoded.email], (err, results) => {
      if (err) {
        res.status(401).json({ error: "Invalid token" });
      }
      if (results?.rowCount) {
        next();
      } else res.status(401).json({ error: "Invalid token" });
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
