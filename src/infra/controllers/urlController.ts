import { NextFunction, Request, Response } from "express";
import { addUrlInteractor } from "../provider/adapter/urlAdapter";
const db: Array<any> = [];

export class UrlController {
  static save = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const origine = request.body;
      const result = await addUrlInteractor.execute(origine);
      return response.json(result);
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static redirect = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const url = request.body;
      const code = request.params;

     
    } catch (err) {
      return response.status(500).send(err);
    }
  };


}
