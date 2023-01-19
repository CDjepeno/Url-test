import { IUrlRepository } from "../../repository/repository/IUrlRepository";
import { GetStatResponse } from "./GetStatResponse";

export class GetStatUrl {
  constructor(private repository: IUrlRepository) {}

  async execute(): Promise<GetStatResponse[]> {
      
      return this.repository.getStat()
          
  }
}