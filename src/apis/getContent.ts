import { Request, Response } from "express";
import { pool } from "../client";
const jwt = require("jsonwebtoken");

export interface MediaLibraryApiResponse {
  id: string;
  title: string;
  type: string;
  director: string[];
  cast: string[];
  country: string[];
  date: Date;
  releasedYear: number;
  duration: string;
  genre: string[];
  description: string;
}
export interface MediaLibraryQueryResponse {
  show_id: string;
  title: string;
  type: string;
  director: string | null;
  cast: string | null;
  country: string | null;
  date: Date;
  released_year: number;
  duration: string;
  listed_in: string | null;
  description: string;
  rating: string;
}

export const mediaLibrary = (req: Request, res: Response) => {
  const query = `SELECT * FROM movies_tvshows`;
  pool.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    const response = results.rows.map(
      (row: MediaLibraryQueryResponse): Partial<MediaLibraryApiResponse> => {
        const {
          director,
          cast,
          listed_in,
          country,
          date,
          description,
          duration,
          show_id,
          released_year,
          title,
          type,
        } = row;
        return {
          country: country?.split(","),
          date,
          description,
          duration,
          id: show_id,
          releasedYear: released_year,
          title,
          type,
          director: director?.split(","),
          cast: cast?.split(","),
          genre: listed_in?.split(","),
        };
      }
    );
    res.status(200).json({
      success: true,
      response: { body: response },
    });
  });
};
