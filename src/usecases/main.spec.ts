import { Main } from '../main';

describe('Main', () => {
  test('should correctly run main', () => {
    const main = new Main()
    main.main()
  })

  test('should correctly format to title case', () => {
    const title = 'otávio augusto lazzarini lemos'
    const m = new Main()
    console.log(m.toTitleCase(title))
    expect(m.toTitleCase(title)).toEqual('Otávio Augusto Lazzarini Lemos')
  })
})