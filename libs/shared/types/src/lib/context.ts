import type { User } from "@generated/type-graphql";
import { PrismaClient } from "@prisma/client";
import type { Request, Response } from "express";

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  user: User | null;
}
