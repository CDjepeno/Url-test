import { NotFound } from "../../errors/httpErrors";
import { IUrlRepository } from "../../repository/repository/IUrlRepository";
import { UrlStat } from "../../types/type";

export class RedirectUrl {
  constructor(private repository: IUrlRepository) {}

  async execute(code: number): Promise<UrlStat> {
      const url = this.repository.findUrl(code)

      if(!url) {
        throw new NotFound('Not URL Found')
      }

      return url
          
  }
}