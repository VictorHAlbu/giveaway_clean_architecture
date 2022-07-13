import { Participant } from '../../domain/participant'
import { ParticipantRepository } from '../../usecases/port/participantrepository';

export class CsvParticipantRepository implements ParticipantRepository {
  lp: Participant[] = []

  constructor (filename: string) {
    var loader = require('csv-load-sync')
    var csv = loader(filename)

    csv.forEach((element: { Nome: string; email: string; score: string; }) => {
      this.lp.push(this.formatFromCsv(element.Nome, element.email, element.score))
    })
  }

  findAllParticipants (): Participant[] {
    return this.lp
  }

  formatFromCsv (name: string, email: string, scorestr: string): Participant {
    const score = parseInt(scorestr.substring(0, scorestr.indexOf('/')).trim(), 10)
    const p: Participant = new Participant(CsvParticipantRepository.toTitleCase(name), email, score)
    return p
  }

  static toTitleCase (str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }
}
