import { UrlStat } from "../../src/core/types/type"
import { GetStatResponse } from "../../src/core/useCases/getStatUrl/GetStatResponse"

export const statsUrls: Array<GetStatResponse>  = [
  {
    originalUrl: "https://www.facebook.com",
    shortUrl: "DSGFQSGDS",
    nbclick: 3,
  },
  {
    originalUrl: "https://www.facebook.com",
    shortUrl: "DSGFQSGDS",
    nbclick: 3,
  }

]

export const url: UrlStat = {
  originalUrl: "https://www.facebook.com",
  shortUrl: "DSGFQSGDS",
}

