declare namespace Express {
  interface Request {
    id: string | JwtPayload | undefined;
  }
}
