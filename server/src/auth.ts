import { sign } from "jsonwebtoken";
import { User } from "./entity/User";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, "jkdfaisdofias", {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, "fefedrheqqqq", {
    expiresIn: "7d",
  });
};
