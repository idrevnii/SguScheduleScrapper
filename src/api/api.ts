import axios from 'axios'

type RawHtml = string

const api = axios.create({
  baseURL: 'https://www.sgu.ru/schedule',
  timeout: 3000
})

export async function getPage(url: string) {
  return api
    .get<RawHtml>(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error)
      return
    })
}
