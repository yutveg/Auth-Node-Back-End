import { Response } from "express";

export const sendRefresh = (res: Response, token: string) => {
  res.cookie("jid", token, {
    httpOnly: true,
  });
};
