import { AddUrl } from '../../../core/useCases/addUrl/AddUrl';
import { UrlProvider } from '../urlProvider';

const urlRepository = new UrlProvider()


const addUrlInteractor = new AddUrl(urlRepository)

export { addUrlInteractor }