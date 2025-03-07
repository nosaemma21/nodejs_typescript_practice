import { Request, Response } from "express-serve-static-core";
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/queryParams";
import { User } from "../types/response";

export function getUsers(req: Request, res: Response) {
  res.send([]);
}

export function getUserById(req: Request, res: Response) {
  res.send({});
}

export function createUser(
  req: Request<{ id: string }, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<User>
) {
  res.status(201).send({
    id: 1,
    email: "Imafidon Nosakhare",
    username: "nosaemma21",
  });
}
