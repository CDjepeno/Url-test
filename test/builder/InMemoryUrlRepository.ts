import shortid from 'shortid';
import isUrlHttp from 'is-url-http';
import { statsUrls, url } from "../data/url";
import { IUrlRepository } from '../../src/core/repository/repository/IUrlRepository';

export class InMemoryUrlRepository implements IUrlRepository{

  saveUrl(url: string) {
    const originalUrl = url;
    const shortUrl = `${shortid.generate()}`;
    const res = {originalUrl, shortUrl}
    
    return res
  }


  isValidUrl(url: string) {
    const isValid = isUrlHttp(url);
    if(!isValid) {
      return false
    }
    return true
  }

  getStat() {

    return statsUrls;
  }

  findUrl(code: number) {
   return url
  }

}