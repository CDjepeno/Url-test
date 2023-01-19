import { addUrlInteractorForTest } from "../../adapter/UrlAdapterForTest";
import { InMemoryUrlRepository } from "../../builder/InMemoryUrlRepository";


describe('Test redirectUrl Use-Case' , () => {
  const repo = new InMemoryUrlRepository()
  it('Should return true when url is valid', () => {
    const rightUrl = 'https://www.hello.com'

    const result = repo.isValidUrl(rightUrl)

    expect(result).toBe(true)
  })  
  it('Should return false when url is not  valid', () => {
    const wrongUrl = 'freecodecorg'
    
    const result = repo.isValidUrl(wrongUrl)
    
    expect(result).toBe(false)
  })
  it('Should return Bad request error invalid url when url is not valid', async () => {
    const wrongUrl = {originalUrl: 'freecodecorg'}

    function get() {
      return addUrlInteractorForTest.execute(wrongUrl)
    }
    
    expect(get).rejects.toThrow("invalid URL");

  })

  it('Should be return right object when request as good', async () => {
    const rightUrl = {originalUrl: 'https://www.hell.com'}

    const result = await addUrlInteractorForTest.execute(rightUrl)

    expect(result).toEqual(expect.objectContaining({
      originalUrl: expect.any(String),
      shortUrl: expect.any(String)
    }))
  })

})