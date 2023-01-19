import { UrlStat } from "../../core/types/type";
import shortid from "shortid";
import isUrlHttp from "is-url-http";
import { IUrlRepository } from "../../core/repository/repository/IUrlRepository";
import { GetStatResponse } from "../../core/useCases/getStatUrl/GetStatResponse";
const db: Array<any> = [];

export class UrlProvider implements IUrlRepository {

  saveUrl(url: string) {
    const originalUrl = url;
    // const shortUrl = `https://localhost:3000/api/shorturl/${shortid.generate()}`;
    const shortUrl = `${shortid.generate()}`;
    const res = { originalUrl, shortUrl };
    db.push(res);
    return res;
  }

  isValidUrl(url: string) {
    const isValid = isUrlHttp(url);
    if (!isValid) {
      return false;
    }
    return true;
  }

  getStat() {
    const sommeNbClickEachUrl = db.reduce((acc, cur) => {
      return { ...acc, [cur.originalUrl]: (acc[cur.originalUrl] || 0) + 1 };
    }, {});

    const urlsWithNbClickDuplicate: Array<GetStatResponse> = db.map((url) => {
      for (const [key, value] of Object.entries(sommeNbClickEachUrl)) {
        if (url.originalUrl === key) {
          url.nbClick = value;
        }
      }
      return url;
    });

    const urlsNbClickWhitoutDuplicate: Array<GetStatResponse> = Array.from(new Set(db.map((a) => a.originalUrl))).map(
      (d) => {
        return urlsWithNbClickDuplicate.find((a) => a.originalUrl === d);
      }
    );

    return urlsNbClickWhitoutDuplicate;
  }

  findUrl(code: number) {
    const urlFind = db.find((db) => db.shortUrl === code);

    if (urlFind) {
      return urlFind
    } else {
      return false
    }
  }

  findAll() {
    return db
    
  }
}
