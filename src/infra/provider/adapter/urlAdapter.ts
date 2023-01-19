import { AddUrl } from '../../../core/useCases/addUrl/AddUrl';
import { GetStatUrl } from '../../../core/useCases/getStatUrl/GetStatUrl';
import { RedirectUrl } from '../../../core/useCases/redirectUrl/RedirectUrl';
import { UrlProvider } from '../urlProvider';

const urlRepository = new UrlProvider()


const addUrlInteractor = new AddUrl(urlRepository)
const getStatUrlInteractor = new GetStatUrl(urlRepository)
const redirectUrlInteractor = new RedirectUrl(urlRepository)

export { addUrlInteractor, getStatUrlInteractor, redirectUrlInteractor }