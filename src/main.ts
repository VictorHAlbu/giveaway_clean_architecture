import { CsvParticipantRepository } from './adapter/repository/csvparticipantrepository'
import { AddParticipantToGiveaway } from './usecases/addparticipanttogiveaway';
import { DrawWinnersFromGiveaway } from './usecases/drawwinners';
import { CreateGiveaway } from './usecases/creategiveaway';

export class Main {
  main (): void {
    const giveaway = new CreateGiveaway().createGiveaway(8)
    const csvRepo = new CsvParticipantRepository('test1.csv')
    const addParticipants = new AddParticipantToGiveaway(giveaway, csvRepo)
    addParticipants.addParticipantsToGiveaway()
    const drawWinners = new DrawWinnersFromGiveaway(giveaway)
    const winners = drawWinners.drawWinners(2)
    console.log(winners)
  }

}