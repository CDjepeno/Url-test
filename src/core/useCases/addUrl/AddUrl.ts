import { BadRequest } from '../../errors/httpErrors';
import { IUrlRepository } from '../../repository/repository/IUrlRepository';
import { AddUrlRequest } from './AddUrlRequest';
import { AddUrlResponse } from './AddUrlResponse';
export class AddUrl {
  constructor(private repository: IUrlRepository) {}

  async execute(request: AddUrlRequest): Promise<AddUrlResponse> {

      const url = request.originalUrl;
      
      if(!this.repository.isValidUrl(url)) {  
        throw new BadRequest('invalid URL')
      }
      
      return this.repository.saveUrl(url)
          
  }
}
