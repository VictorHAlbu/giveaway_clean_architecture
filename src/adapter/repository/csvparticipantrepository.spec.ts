import { CsvParticipantRepository } from './csvparticipantrepository'
import { Participant } from '../../domain/participant'

describe('CSV participant repository', () => {
  test('should correctly translate csv line to a participant', () => {
    const csvrep = new CsvParticipantRepository('test1.csv')
    const participantList: Participant[] = csvrep.findAllParticipants()
    expect(participantList[0].name).toEqual('Vinícius')
    expect(participantList[0].score).toEqual(8)
    expect(participantList[0].email).toEqual('vinicius@mail.com')
  })

  test('should correctly format to title case and write to text file', () => {
    const s = 'otávio augusto lazzarini lemos'
    expect(CsvParticipantRepository.toTitleCase(s)).toEqual('Otávio Augusto Lazzarini Lemos')
  })
})