import { AddUrl } from '../../../core/useCases/addUrl/AddUrl';
import { GetStatUrl } from '../../../core/useCases/getStatUrl/GetStatUrl';
import { UrlProvider } from '../urlProvider';

const urlRepository = new UrlProvider()


const addUrlInteractor = new AddUrl(urlRepository)
const getStatUrlInteractor = new GetStatUrl(urlRepository)

export { addUrlInteractor, getStatUrlInteractor }