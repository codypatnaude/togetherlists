import { Router, Request, Response, NextFunction } from "express";
import { UserModel } from "../models/user";

export function api() {
  let router = Router();

  /*router.get("/list/:id", (req: Request, res: Response, next: NextFunction) => {
    console.log("Someone is requesting a list");
    res.send("You requested list " + req.params.id);
  });*/

  router.post("/user", (req: Request, res: Response, next: NextFunction) => {
    console.log("Someone is creating a user");
    UserModel.create(req.body)
    .then(
      (rec) => res.send(rec),
      (err) => res.status(500).send(err)
    )
  });

  return router;
}
