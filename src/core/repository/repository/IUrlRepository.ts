import { UrlStat } from "../types/type";
import { GetStatResponse } from "../useCase/getStatUrl/GetStatResponse";

export interface IUrlRepository {
   saveUrl(url: string): UrlStat
   isValidUrl(url: string): boolean
   getStat(): Array<GetStatResponse> 
   findUrl(code: number): UrlStat

}