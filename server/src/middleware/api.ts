import {Router, Request, Response, NextFunction} from "express"

export function api(){
  let router = Router()

  router.use('/list/:id', (req: Request, res: Response, next: NextFunction)=>{
    console.log("Someone is requesting a list")
    res.send("You requested list " + req.params.id)
  })

  return router
}