import { getSchedule } from './parser'

async function main() {
  const url = 'https://www.sgu.ru/schedule/knt/do/311'
  const lessons = await getSchedule(url)

  console.log(lessons)
}

main()
