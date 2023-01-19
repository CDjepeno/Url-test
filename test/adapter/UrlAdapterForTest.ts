import { AddUrl } from "../../src/core/useCases/addUrl/AddUrl";
import { InMemoryUrlRepository } from "../builder/InMemoryUrlRepository";


const urlRepository = new InMemoryUrlRepository()


const addUrlInteractorForTest = new AddUrl(urlRepository)

export { addUrlInteractorForTest }