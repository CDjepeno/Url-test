import { NextFunction, Request, Response } from "express";
import { addUrlInteractor, getStatUrlInteractor, redirectUrlInteractor } from "../provider/adapter/urlAdapter";
import { UrlProvider } from '../provider/urlProvider';
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
      const code = request.params.code;

      const result = await redirectUrlInteractor.execute(code);
      return response.redirect(result)
    } catch (err) {
      return response.status(500).send(err);
    }
  };

  static stat = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    try {
      const result = await getStatUrlInteractor.execute();
      return response.json(result) 
 
    } catch (err) {
      return response.status(500).send(err);
    }
  };
}
